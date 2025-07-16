import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
   category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Category',
      required:true
    },
  description: String,
});

const Food = mongoose.model("Food",foodSchema)
export default Food