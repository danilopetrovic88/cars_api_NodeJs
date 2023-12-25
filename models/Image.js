const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
    {
        image: String
    },
    {
        collection: "Images",
    }
)

// module.exports = Image = mongoose.model("Image", ImageSchema)

mongoose.model("Image", ImageSchema)