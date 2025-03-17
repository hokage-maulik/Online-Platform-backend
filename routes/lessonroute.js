const express=require("express")

const { getlesson, addlesson, deletelesson, getlessonbyId }=require("../controller/lessoncontroller")

const lessonrouter=express.Router()
lessonrouter.get("/get",getlesson)
lessonrouter.post("/add",addlesson)
lessonrouter.delete("/delete/:id",deletelesson)
lessonrouter.get("/get/:id",getlessonbyId)

module.exports=lessonrouter