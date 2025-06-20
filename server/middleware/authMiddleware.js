import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";
import asyncHandler from "express-async-handler";

// protect middleware
export const protect = asyncHandler(async (req, res, next) => {
  let token;
  
  // Check if there is an authorization header with Bearer token
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract the token from the Authorization header
      token = req.headers.authorization.split(" ")[1];

      // Log the token for debugging purposes (remove in production)
      console.log(token);

      // Verify the token using JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get the user from the token and attach to the request object
      req.user = await User.findById(decoded.id).select("-password");

      // Continue to the next middleware or route handler
      return next();
    } catch (error) {
      console.error(error);
      // Send response if the token is invalid or expired
      return res.status(401).json({ message: "Not authorized, token is invalid or expired" });
    }
  }

  // If there is no token
  if (!token) {
    return res.status(401).json({ message: "Not authorized, token not found" });
  }
});
