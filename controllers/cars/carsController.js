const mongoose = require("mongoose");
require("../../models/Car");

const Car = mongoose.model("Car");

const carsController = (req,res) => {
    console.log("carsController REQ: ", req)
   const {
        brand ,
        model ,
        production_year ,
        country_of_origin ,
        fuel ,
        number_of_doors ,
        engine ,
        horse_power ,
        transmition ,
        description ,
        images,
        author
   } = req.body;

   Car.create({
        brand ,
        model ,
        production_year ,
        country_of_origin ,
        fuel ,
        number_of_doors ,
        engine ,
        horse_power ,
        transmition ,
        description ,
        images,
        author
   })
   .then(() => {
    res.json("Created new car")
   })
   .catch((err) => {
    if(err) {
        res.status(400).json({ error: err });
    }
   })
}

module.exports = carsController;