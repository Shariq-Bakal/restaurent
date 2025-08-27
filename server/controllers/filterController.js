// Import the Menu model from our models folder
import Menu from "../models/menu.js";

// Define the filterMenu function that handles HTTP requests
export const filterMenu = async (req, res) => {
    console.log(req.url);  // Logs the full URL (path + query parameters)

    try {
        // Check if there are any query parameters in the URL
        // Object.keys(req.query).length === 0 means no ?sort=high or ?category=pizza etc.
        // /An array containing the keys (property names) of the object obj. The keys are returned as strings.
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
        query['$and'] = []; // $andused to combine multiple query condition
        // Variable to store sorting preference (high/low)

//         db.collection.find({
//   $and: [
//     { price: { $gte: 10 } },   // price must be greater than or equal to 10
//     { price: { $lt: 50 } },     // price must be less than 50
//     { category: "Appetizers" }  // category must be "Appetizers"
//   ]
// });
        console.log(query,"query")
        let sort = null;

        // Loop through each query parameter in the URL
        // Example: for ?category=pizza&price=10,20&sort=high
        for (let key in req.query) {
            // Check if current parameter is "sort"
            console.log(key)
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