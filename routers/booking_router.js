const express = require("express");
const {BookingModel}= require("../models/booking_model");
const { UserModel } = require("../models/user_model");
const { FlightModel } = require("../models/flight_model");
const bookingRouter = express.Router();


bookingRouter.post("/booking",async (req,res)=>{
    const data = req.body
    try {
        const booking = new BookingModel(data);
        await booking.save();
        const status = 201;
        const msg = "your booking is confirmed";
        res.send({"status":status,"msg":msg});

    } catch (error) {
        res.send("Something Went Wrong");
        console.log(error)
    }
})

bookingRouter.get("/dashboard",async(req,res)=>{
    try {
        const bookings = await BookingModel.find().populate("user","name email").populate("flight","airline flightNo departure arrival departureTime arrivalTime seats price");
        res.send(bookings)
    } catch (error) {
        console.log(error);
        res.send("wrong query")
    }
 
})


module.exports ={bookingRouter}
