// // const mongojs = require("mongojs");
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// require("../models/User");
// const User = mongoose.model("User");
// const jwt = require("jsonwebtoken");

// const JWT_SECRET =
//   "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

// const loginController = async (req,res) => {
//         const { email, password } = req.body;
      
//         const user = await User.findOne({ email });
//         if (!user) {
//           return res.json({ error: "User Not found" });
//         }
//         if (await bcrypt.compare(password, user.password)) {
//           const token = jwt.sign({ email: user.email }, JWT_SECRET, {
//             expiresIn: "2h",
//           });
      
//           if (res.status(201)) {
//             return res.send({ 
//                 status: "ok", 
//                 token : token,
//                 user
//             });
//           } else {
//             return res.json({ error: "error" });
//           }
//         }
//         res.json({ status: "error", error: "InvAlid Password" });
// }

// module.exports = loginController;

