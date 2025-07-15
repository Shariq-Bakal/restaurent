// In your controller file (reservationController.js) or wherever you need the model
import Reservation from "../models/reservation.js"; // Note the .js extension
import asyncHandler from "express-async-handler"

//Controllers 

//Make Reservations 

//Get Reservations
// export const getReservations = async (req,res)=>{
//     try{
//         const reservations = await Reservation.find({user:req.user.id});
//         res.status(200).json(reservations)
//     }
//     catch(error){
//         console.log(error)
//         res.status(404).json({message:"Not found"})
//     }
// }
export const getReservations = asyncHandler( async(req,res)=>{
    const page = req.query.page;
    const limit = req.query.limit;
    const skipIndex = (page-1)*limit;
    try{
        const reservations = await Reservation.find().
    sort({date:1}).limit(limit).skip(skipIndex).exec();
    res.status(200).json(reservations)
    }
    catch(error){
        res.status(500).json({message:"Error occured while fetching data"})
    }
})


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
export const makeReservation = async (req, res) => {
  const reservationData = req.body;

  try {
    // Attach the user ID from the JWT to the reservation data
    if (!req.user || !req.user.id) {
      throw new Error('User is not authenticated or no user ID found');
    }

    reservationData.user = req.user.id;

    // Create the reservation document in the database
    const reservation = await Reservation.create(reservationData);

    // Respond with the created reservation and a 201 status code
    res.status(201).json(reservation); // Use 201 for successful creation

  } catch (error) {
    console.log(error.message);
    // Respond with a 400 status code for errors (or 500 for server errors)
    res.status(400).json({ message: "There was an error in posting data" });
  }
};


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