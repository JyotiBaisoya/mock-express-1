const express = require("express");
const {FlightModel} = require("../models/flight_model");

const flightRouter = express.Router();

flightRouter.get("/flights",async(req,res)=>{
    try {
        const flight = await FlightModel.find();
        const status = 200;
        const msg = "These are all flights available"
        res.send({"status":status,"msg":msg,flight})
    } catch (error) {
        console.log(error);
        res.send("Something wentwrong")
    }
})

flightRouter.get("/flights/:id",async (req,res)=>{
    let flightID = req.params.id;
    try {
       const flight = await  FlightModel.findById({_id:flightID});
       const status = 200;
       const msg = "These are all flights available"
       res.send({"status":status,"msg":msg,flight})
    } catch (error) {
        console.log(error)
    }
});

flightRouter.post("/flights",async(req,res)=>{
    const data =  req.body
    try {
        const flight =  new FlightModel(data);
        await flight.save();
        const status = 201;
        const msg = "flight has been added"
        res.send({"status":status,"msg":msg})
    } catch (error) {
        res.send("Something Went Wrong")
        console.log(error)
    }
});

flightRouter.patch("/flights/:id",async(req,res)=>{
    let flightID = req.params.id;
    const payload = req.body;
    const status = 204;
        const msg = "flight has been updated"
    try {
      const flight =  await FlightModel.findByIdAndUpdate({_id:flightID},payload);
      res.send({"status":status,"msg":msg})
    } catch (error) {
        res.send("Something Went Wrong");
        console.log(error)
    }
});

flightRouter.delete("/flights/:id",async(req,res)=>{
    let flightID = req.params.id;
    const payload = req.body;
    const status = 202;
        const msg = "flight has been deleted"
    try {
      const flight =  await FlightModel.findByIdAndDelete({_id:flightID});
      res.send({"status":status,"msg":msg})
    } catch (error) {
        res.send("Something Went Wrong");
        console.log(error)
    }
});

module.exports={flightRouter};