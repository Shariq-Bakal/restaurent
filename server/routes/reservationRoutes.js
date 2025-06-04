import express from "express";
import { getReservations, makeReservation, updateReservation , getReservation} from "../controllers/reservationController.js";
const router = express.Router();


//get reservations

router.get("/",getReservations);
router.get("/:id",getReservation);

router.post("/",makeReservation);

router.patch("/:id",updateReservation);



// Changed to ES6 export
export default router;  // Simplified export