
const mongoose=require("mongoose")

const lessonSchema=new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    time:{
        type:String,
    },
    video:{
        type:String,
    },
    notes:{
        type:String,
    },
    courseId:{
        type:mongoose.Schema.Types.ObjectId,ref:"course"
    }


})
const lessonModel=mongoose.model("lesson",lessonSchema);
module.exports=lessonModel