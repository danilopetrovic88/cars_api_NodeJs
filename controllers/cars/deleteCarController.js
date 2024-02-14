const mongojs = require("mongojs");
const db = mongojs("carsapp", ["users", "cars"]);

const deleteCarController = (req,res) => {
    let carId = req.params.carId;


    db.cars.remove({ _id: mongojs.ObjectID(carId) }, (err, docs) => {
        res.send("Deleted")
    });
}

module.exports = deleteCarController;