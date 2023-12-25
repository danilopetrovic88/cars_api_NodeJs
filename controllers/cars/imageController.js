// const mongoose = require("mongoose");
// require("../../models/Image");

// const Image = mongoose.model("Image");

// const imageController = (req,res) => {
//    const {
//      url,
//      car,
//      author,
//    } = req.body;

//    Image.create({
//      url,
//      car,
//      author,
//    })
//    .then(() => {
//     res.json("Created new image")
//    })
//    .catch((err) => {
//     if(err) {
//         res.status(400).json({ error: err });
//     }
//    })
// }

// module.exports = imageController;