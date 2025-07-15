import express from "express";
import { getReservations, makeReservation, updateReservation , getReservation} from "../controllers/reservationController.js";
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";

//get reservations

router.get("/", protect, getReservations);
router.get("/:id",getReservation);

router.post("/",protect, makeReservation);

router.patch("/:id",updateReservation);



// Changed to ES6 export
export default router;  // Simplified export