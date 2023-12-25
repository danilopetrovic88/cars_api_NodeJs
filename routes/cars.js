const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadImages")

router.get("/", require("../controllers/cars/getAllCarsController"));
router.get("/:carId", require("../controllers/cars/getSingleCarController"));
router.post("/", upload.array("images"), require("../controllers/cars/carsController"));
router.put("/:carId", upload.array("images"), require("../controllers/cars/editSingleCarController"));
router.delete("/:carId", require("../controllers/cars/deleteCarController"));

module.exports = router;