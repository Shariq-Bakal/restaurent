import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/usermodel.js";

// Register user
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, password2 } = req.body;

  if (!name || !email || !password || !password2) {
    return res.status(400).json("Please include all fields");
  }

  if (password !== password2) {
    return res.status(400).json("Passwords do not match");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json("User already exists");
  }

  const salt = await bcrypt.genSalt(11);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashPassword,
  });

  await user.save();

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Invalid user data");
  }
});

// Login user
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && await bcrypt.compare(password, user.password)) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).json("Invalid user credentials");
  }
});

export const getMe = asyncHandler(async (req,res)=>{
  const {id, email, name} = await User.findById(req.user.id);
  res.status(200).json({
    id:id,
    name,
    email 
  }) 
})

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
