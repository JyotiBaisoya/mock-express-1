const express = require("express");
const {UserModel} = require("../models/user_model")
const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    try {
        let {name,email,password} = req.body;
        const user = new UserModel ({name,email,password});
        await user.save()
        const status = 201;
        const message = "registerd successfully"
        res.send({"status":status,"message":message});
    } catch (error) {
        console.log(error)
    }
   
})

userRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const user = await UserModel.find({email,password});
        if(user.length>0){
            res.send("logged in successfully");
            console.log(user)
        }else{
            res.send("please log in first")
        }
    } catch (error) {
       console.log("error");
       res.send("Sorry! Something went wrong") 
    }
})

module.exports = {userRouter}