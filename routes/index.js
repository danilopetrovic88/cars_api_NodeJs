const express = require("express");
const router = express.Router();

router.use("/", require("./home"));
router.use("/cars", require("./cars"));
// router.post("/register", require("../controllers/registerController"));
// router.post("/login", require("../controllers/loginController"));
// router.get("/me", require("../controllers/getActiveUser"))

module.exports = router;