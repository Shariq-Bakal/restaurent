import express from "express";
const router = express.Router();
import {loginUser, registerUser} from "../controllers/userController.js"


//Register Route
router.post('/', registerUser)
router.post('/login', loginUser)
// Login Route
 

//Get user info Route 

// Changed to ES6 export
export default router;  // Simplified export 