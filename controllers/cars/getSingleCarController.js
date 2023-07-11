const mongojs = require("mongojs");
const db = mongojs("carsapp", ["users", "cars"]);

const getSingleCarController = (req,res) => {
    let carId = req.params.carId;

    db.cars.findOne({ _id: mongojs.ObjectID(carId) }, (err, docs) => {
        if(err) {
            res.send(err)
        } else {
            res.send(docs);
        }
    });
}

module.exports = getSingleCarController;