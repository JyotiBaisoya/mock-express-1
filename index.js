const express = require("express");
const {connection} = require("./config/connection");
const { userRouter} = require("./routers/user_router");
const{flightRouter } = require("./routers/flight_router");
const {bookingRouter} = require("./routers/booking_router");
require("dotenv").config()

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
});

app.use(userRouter)
app.use(flightRouter);
app.use(bookingRouter)



app.listen(process.env.port,async ()=>{
    try {
        await connection 
        console.log("connected to db")
    } catch (error) {
        console.log(error)
    }
   

    console.log("running on port 8080")
})