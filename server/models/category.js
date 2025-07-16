import mongoose from "mongoose";

export const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    isActive:{
        type:Boolean,
        required:true
    }
})

const Category = mongoose.model("Category",categorySchema)
export default Category