 const mongoose = require("mongoose");
 const Schema = mongoose.Schema

 const bookingSchema = mongoose.Schema({
    user : { type: Schema.Types.ObjectId, ref: 'User' },
    flight : { type: Schema.Types.ObjectId, ref: 'Flight' }
 });

 const BookingModel = mongoose.model("Booking",bookingSchema);;

 module.exports={BookingModel};