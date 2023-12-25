
const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
    {
        brand : String,
        model : String,
        production_year : String,
        car_body : String,
        fuel : String,
        number_of_doors : String,
        price : String,
        mileage : String,
        replacement : String,
        cubic_capacity : String,
        horse_power : String,
        drive : String,
        transmition : String,
        number_of_seats : String,
        steering_wheel_side : String,
        climatronic : String,
        color : String,
        // registered_until : Date,
        description : String,
        images : Array,
        author : String,
        phone: String,
        city: String,
        author_id: String,
        created_at : {
            type: Date, 
            default: () => Date.now(),
        },
        updated_at: {
            type: Date, 
            default: () => Date.now(),
        },
    },
    {
        collection : "cars"
    }
);

mongoose.model("Car", CarSchema)