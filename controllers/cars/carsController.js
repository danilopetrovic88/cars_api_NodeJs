const mongoose = require("mongoose");
require("../../models/Car");
const fs = require("fs");
require("../../models/Image")


const Car = mongoose.model("Car");

const carsController = (req,res) => {

   let car = new Car ({
     brand : req.body.brand,
     model: req.body.model,
     production_year: req.body.production_year,
     car_body: req.body.car_body,
     fuel: req.body.fuel,
     number_of_doors: req.body.number_of_doors,
     price: req.body.price,
     mileage: req.body.mileage,
     replacement: req.body.replacement,
     cubic_capacity: req.body.cubic_capacity,
     horse_power: req.body.horse_power,
     drive: req.body.drive,
     transmition: req.body.transmition,
     number_of_seats: req.body.number_of_seats,
     steering_wheel_side: req.body.steering_wheel_side,
     climatronic: req.body.climatronic,
     color: req.body.color,
     images: req.files,
    //  registered_until,
     description: req.body.description,
     author: req.body.author,
     phone: req.body.phone,
     city: req.body.city,
     author_id: req.body.author_id
   })
   car.save()
   .then(() => {
    res.send("Created new car")
   })
   .catch((err) => {
    if(err) {
        res.status(400).json({ error: err });
    }
   })
}

module.exports = carsController;