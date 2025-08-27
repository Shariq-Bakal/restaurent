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
// Get all fodds

// ✅ GET: All Foods with Populated Category
export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find({});
    return res.status(200).json(foods);
  } catch (error) {
    console.error("Get foods error:", error);
    return res.status(500).json({ message: "Failed to fetch foods" });
  }
};

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





// Import the Menu model from our models folder
import Menu from "../models/menu.js";

// Define the filterMenu function that handles HTTP requests
export const filterMenu = async (req, res) => {
  console.log(req.url)
    try {
        // Check if there are any query parameters in the URL
        // Object.keys(req.query).length === 0 means no ?sort=high or ?category=pizza etc.
        if (Object.keys(req.query).length === 0) {
            // If no filters, get ALL menu items from database
            const menuItems = await Menu.find({});
            // Send back all menu items with success status
            return res.status(200).json(menuItems);
        }

        // Prepare an empty object to build our database query
        let query = {};
        // Create an $and array to hold multiple filter conditions
        // $and means ALL conditions must be true
        query['$and'] = [];
        // Variable to store sorting preference (high/low)
        let sort = null;

        // Loop through each query parameter in the URL
        // Example: for ?category=pizza&price=10,20&sort=high
        for (let key in req.query) {
            // Check if current parameter is "sort"
            if (key === "sort") {
                // Store the sort value (either "high" or "low")
                sort = req.query[key];
            } 
            // Check if current parameter is "price"
            else if (key === "price") {
                // Split price range string like "10,20" into array ["10", "20"]
                const values = req.query[key].split(",")
                    // Convert string numbers to actual numbers [10, 20]
                    .map(value => parseInt(value));
                
                // Make sure we have exactly 2 valid numbers
                if (values.length === 2 && !isNaN(values[0]) && !isNaN(values[1])) {
                    // Add price range filter: price must be >= first number AND < second number
                    query['$and'].push({ price: { $gte: values[0], $lt: values[1] } });
                }
            } 
            //Search by name
            else if(key ==="search"){
              const name = req.query[key]
              if(typeof(name)==="string" && name.trim() !== "" ){
              query['$and'].push({name:name})
              console.log(query)}
              else {
        // Handle the case where the search parameter is not a valid string
              console.log("Invalid or empty search term");
    }
            }
            
            // Handle all other parameters (category, cuisine, dietary restrictions, etc.)
            else {
                // For parameters like category=pizza,pasta
                // Split into array ["pizza", "pasta"] and use $in to match ANY of these values
                query['$and'].push({ [key]: { $in: req.query[key].split(",") } });
            }
        }
        

        // Variable to store our final database results
        let result;

        // CASE 1: Only sorting requested, no filters
        if (sort && query['$and'].length === 0) {
            // Get all items but sort them by price
            result = await Menu.find() // Find everything
                // Sort by price: -1 for high-to-low, 1 for low-to-high
                .sort({ price: sort === "high" ? -1 : 1 });
        } 
        // CASE 2: Both filters AND sorting requested
        else if (sort && query['$and'].length > 0) {
            // Apply filters AND sorting
            result = await Menu.find(query) // Use our filter conditions
                // Sort the filtered results by price
                .sort({ price: sort === "high" ? -1 : 1 });
        } 
        // CASE 3: Only filters, no sorting
        else {
            // Just apply filters, no special sorting
            result = await Menu.find(query);
        }

        // Send the final results back to the client
        res.status(200).json(result);

    } catch (error) {
        // If anything goes wrong, send error response
        res.status(500).json({ 
            message: "Server error", 
            error: error.message // Include error details
        });
    }
};

// This API acts like a smart restaurant menu filter. When a customer makes a request (like visiting a URL with parameters such as ?category=pizza&price=10,20&sort=high), the API understands these instructions and fetches the perfect menu items. It can handle three main scenarios: returning everything when no filters are specified, applying various filters like price ranges and categories, and sorting results by price. The code carefully processes each parameter, converts them into database queries that MongoDB understands, and ensures that all the filtering conditions work together correctly. If anything goes wrong during this process, it gracefully handles errors and provides helpful feedback instead of crashing.