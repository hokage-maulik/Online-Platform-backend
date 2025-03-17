
const express=require("express")
const db=require("./config/db")
const cors=require("cors")
const bodyparser=require("body-parser")
const router = require("./routes/useroute")
const courserouter = require("./routes/courseroute")
const lessonrouter = require("./routes/lessonroute")

const app=express()
app.use(cors())
app.use(bodyparser.json())
app.use("/user",router)
app.use("/course",courserouter)
app.use("/lesson",lessonrouter)
app.listen(8003,()=>{
    console.log("server is running on port 8003")
})