import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usermodel.js";

export const registerUser = asyncHandler(async(req,res)=>{
    const {name, email, password, password2} = req.body;
    if(!name||!email||!password||!password2){
        return res.status(400).json("Please include all fields")
    }
    if (password !== password2) {
    return res.status(400).json("Passwords do not match");
  }
    //Check if user exists or not
    const userExists = await User.findOne({email});
    if(userExists){
        return res.status(400).json("User Already exists")
    }
    //hash the password
    const salt = await bcrypt.genSalt(11);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword)
    //create a user
    const user = new User(
        {name,email,password:hashPassword});
    await user.save();
    if(user){
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id), 
        })
    }
    else{
        res.status(400).json("Invalid user data")
    }
    
})
const JWT_SECRET = "1231231313123123"
//login user

export const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if (user && await bcrypt.compare(password, user.password)) {
    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id), 
        })
}   else {
    res.status(400).json("Invalid user credentials");
}
})


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d", // or "1h", etc.
  });
};