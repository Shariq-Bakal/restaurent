import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import reservationRoutes from "./routes/reservationRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import dotenv from "dotenv"
dotenv.config()
const app  = express();
const Port = process.env.Port || 5000;



app.use(cors());
app.use(express.json());

app.use("/api/reservations", reservationRoutes);
app.use("/api/users", userRoutes);

mongoose.connect('mongodb+srv://shariq:shariq121@cluster1.nap5mtj.mongodb.net/')
.then(()=>{
    app.listen(Port,()=>{
    console.log(`App listening on Port ${Port} and Mongodb connected successfully`)
})
}).catch(err=>{
    console.log(err)
})


