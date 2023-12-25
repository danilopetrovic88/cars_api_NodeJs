const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        first_name : String,
        last_name : String,
        email : {
            type : String,
            unique : true
        },
        phone : String,
        city : String,
        password : String,
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
        collection : "users"
    }
);

mongoose.model("User", UserSchema)