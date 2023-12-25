const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/')
    }, 
    filename: (req, file, cb) => {
        const unique = Date.now()
        cb(null, unique + file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = upload;