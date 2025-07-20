import express from "express";
import { createFood, getFoods, getFoodsByCategory } from "../controllers/menuController.js";
const router = express.Router()


router.post("/",createFood);
router.get("/",getFoods)
router.get("/",getFoodsByCategory)

export default router;