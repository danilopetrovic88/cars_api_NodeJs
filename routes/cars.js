const express = require("express");
const { validateToken } = require("../JWT");
const router = express.Router();

// router.use(checkActiveUser);

router.get("/", require("../controllers/cars/getAllCarsController"));
router.get("/:carId", require("../controllers/cars/getSingleCarController"));
router.post("/", require("../controllers/cars/carsController"));
router.delete("/:carId", require("../controllers/cars/deleteCarController"));

// function checkActiveUser(req,res,next) {
//     let user = req.session.user;
//     if(user) {
//         console.log("req.session.user, ", user);
//             next();
//         } else {
//             console.log("Nije aktivan user");
//         }
// }

module.exports = router;