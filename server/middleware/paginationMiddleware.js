import Reservation from "../models/reservation";
import asyncHandler from "express-async-handler";

export const paginate = asyncHandler( async(req,res,next)=>{
    const page = req.query.page;
    const limit = req.query.limit;
    const skipIndex = (page-1)*limit;
    const results = {};
    try{
        results.results = await Reservation.find().
    sort({_id:1}).limit(limit).skip(skipIndex).exec();
    res.paginatedResults = results
    next()
    }
    catch(error){
        res.status(500).json({message:"Error occured while fetching data"})
    }

    
})