// In your controller file (reservationController.js) or wherever you need the model
import Reservation from "../models/reservation.js"; // Note the .js extension

//Controllers 

//Make Reservations 

//Get Reservations
export const getReservations = async (req,res)=>{
    try{
        const reservations = await Reservation.find();
        res.status(200).json(reservations)
    }
    catch(error){
        console.log(error)
        res.status(404).json({message:"Not found"})
    }
}
//Get Single Reservation
export const getReservation = async(req,res)=>{
    const {id:_id} = req.params
    try{
        const reservation = await Reservation.findById(_id)
         res.status(200).json(reservation)
    }
    catch(error){
        console.log(error.message);
        res.status(404).json({message:"Not found"});
    }
}

//Add Reservtion api
export const makeReservation = async (req,res)=>{
    const reservation = req.body;
    const newReservation = new Reservation(reservation)
    try{
        await  newReservation.save();
        res.status(201).json(newReservation)
    }
    catch(error){
        console.log(error.message   )
        res.status(404).json({message:"There was an error in posting data"})
    }
}

//Update Reservations api

export const updateReservation = async (req,res)=>{
    const {id:_id} = req.params;
    console.log(_id)
    const data = req.body;

    try{
        const reservation = await Reservation.findByIdAndUpdate(_id,data,{new:true});
        if(!reservation){
            return res.status(404).json({ message: "Reservation not found" });
        }
        res.status(200).json(reservation);
    }
    catch(error){
        console.log(error.message   )
        res.status(404).json({message:"There was an error in updating data"})
    }
    
}