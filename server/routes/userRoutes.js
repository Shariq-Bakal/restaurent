import express from "express";
const router = express.Router();
import {loginUser, registerUser, getMe} from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js";


//Register Route
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getme',protect, getMe)
// Login Route
 

//Get user info Route 

// Changed to ES6 export
export default router;  // Simplified export 