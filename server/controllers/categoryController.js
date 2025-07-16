import Category from "../models/category.js";

export const createCategory = async (req,res)=>{
    const {name,isActive} = req.body
    try{
        const existingCategory = await Category.findOne({ name });
        if (existingCategory) {
        return res.status(409).json({ message: "Category already exists" });
        }
        const category = await Category.create({
            name:name,
            isActive:isActive
        })
        res.status(201).json(category)
    }
    catch(error){
        console.log(error)
         res.status(500).json({ message: "Server error. Please try again later." });
    }
}
export const getCategories = async(req,res)=>{
    try{
        // const categories = await Category.find()
        // Fetch only active categories (optional filter)
        const categories = await Category.find({ isActive: true }).select('-__v'); 
         res.status(201).json(categories)

    }
    catch(error){
        res.status(404).json({message:"Failed to fetch data"})
    }
}