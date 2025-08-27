import express from "express";
import { filterMenu, createFood} from "../controllers/menuController.js";

const router = express.Router()


router.post("/",createFood);
// router.get("/",getFoods)
// router.get("/",getFoodsByCategory)

router.get("/",filterMenu);
export default router;