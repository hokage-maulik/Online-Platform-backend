
const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
    },
    duration:{
        type:String,
    },
    image:{
        type:String,
    }
})

const courseModel=new mongoose.model("course",courseSchema)
module.exports=courseModel