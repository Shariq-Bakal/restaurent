import Food from "../models/menu.js";
import Category from "../models/category.js";

//Post food

export const createFood = async (req,res)=>{
    
    try{
        const { name, price, category, description } = req.body;
        const categoryExists = await Category.findById(category);
          if (!name || !price || !category) {
      return res.status(400).json({ message: "Name, price and category are required" });
      const categoryExists = await Category.findById(category);
    }
        if(!categoryExists){
             res.status(404).json({message:"category not found"})
        }
        const food = await Food.create({
            name,
            price,
            category,
            description
        })
       return res.status(201).json(food)
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Failed to post data"})
    }
}
export const getFoods = async (req,res)=>{
    try{
        const foods = await Food.find().populate('category', 'name')
        return res.status(200).json(foods)

    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Failed to post data"})
    }
}