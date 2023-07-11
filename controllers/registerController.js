// const mongojs = require("mongojs");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// require("../models/User");

// const User = mongoose.model("User");

// const registerController = async (req,res) => {
//     const { first_name, last_name, email, password } = req.body

//     const encryptedPassword = await bcrypt.hash(password, 10);
//     try {
//         const oldUser = await User.findOne({ email });

//         if(oldUser) {
//             return res.json({ error: "User allready exists" })
//         }
//         await User.create({
//             first_name, 
//             last_name, 
//             email, 
//             password : encryptedPassword
//         });
//         res.send({ status: "ok" })
//     } catch (error) {
//         res.send({ status: "error" })
//     }
// }

// module.exports = registerController;

