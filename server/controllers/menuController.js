import Food from "../models/menu.js";
import Category from "../models/category.js";

// ✅ POST: Create Food
export const createFood = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    // Validate input
    if (!name || !price || !category) {
      return res.status(400).json({ message: "Name, price and category are required" });
    }

    // Check if category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Create food item
    const food = await Food.create({
      name,
      price,
      category,
      description
    });

    return res.status(201).json(food);
  } catch (error) {
    console.error("Create food error:", error);
    return res.status(500).json({ message: "Failed to create food" });
  }
};

// ✅ GET: All Foods with Populated Category
// export const getFoods = async (req, res) => {
//   try {
//     const foods = await Food.find().populate("category", "name");
//     return res.status(200).json(foods);
//   } catch (error) {
//     console.error("Get foods error:", error);
//     return res.status(500).json({ message: "Failed to fetch foods" });
//   }
// };

// ✅ GET: Foods by Category
export const getFoodsByCategory = async (req, res) => {
  try {
    const category = req.query.category; // expected to be category _id

    let menus;
    if (category) {
      menus = await Food.find({ category }).populate("category", "name");
    } else {
      menus = await Food.find().populate("category", "name");
    }

    return res.status(200).json(menus);
  } catch (error) {
    console.error("Get foods by category error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
