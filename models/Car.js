const session = require("express-session");
const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
    {
        brand : String,
        model : String,
        production_year : String,
        country_of_origin : String,
        fuel : String,
        number_of_doors : String,
        engine : String,
        horse_power : String,
        transmition : String,
        description : String,
        images : Array,
        author : {
            type : Object,
            ref : "User",
        },
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