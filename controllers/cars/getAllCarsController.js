const mongojs = require("mongojs");
const db = mongojs("carsapp", ["users", "cars"]);

const getAllCarsController = (req,res) => {
    db.cars.find((err, docs) => {
        if(err) {
            console.log(err);
        } else {
            res.json(docs);
        }
    });
}

module.exports = getAllCarsController;




















