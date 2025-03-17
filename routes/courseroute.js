const express=require('express')

const { getcourse, addcourse, deletecourse, getcoursebyid }=require("../controller/coursecontroller")

const courserouter=express.Router()
courserouter.get("/get",getcourse)
courserouter.post("/add",addcourse)
courserouter.delete("/delete/:id",deletecourse)
courserouter.get("/get/:id",getcoursebyid)


module.exports=courserouter