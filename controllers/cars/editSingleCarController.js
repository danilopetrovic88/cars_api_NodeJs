const mongojs = require("mongojs");
const db = mongojs("carsapp", ["users", "cars"]);

const editSingleCarController = (req,res) => {
  try {
    const carId = req.params.carId;

    const updatedCarData = req.body;

    db.cars.updateOne(
      { _id: mongojs.ObjectID(carId) },
      { $set: updatedCarData },
      (err, result) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(result);
        }
      }
    );
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
}

module.exports = editSingleCarController;