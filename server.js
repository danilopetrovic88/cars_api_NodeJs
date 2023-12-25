const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const path = require('path');

require("./models/Car");

app.use(cors());

const Car = mongoose.model("Car");

const crypto = require("crypto");
const multer = require("multer");
const {GridFsStorage} = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");

const mongoUrl = "mongodb://localhost/carsapp";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
})
.then(() => {
    console.log("Connected to database");
})
.catch((e) => console.log(e.message))

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use("/", routes);

require("./models/User");
const User = mongoose.model("User");

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("./JWT");

app.use(express.json());
app.use(cookieParser());

app.post("/register", (req, res) => {
  const { first_name, last_name, email, phone, city, password } = req.body;
  const user = User.findOne(email);
  bcrypt.hash(password, 10).then((hash) => {
      User.create({
        first_name, 
        last_name, 
        email, 
        phone,
        city,
        password : hash
    })
      .then(() => {
        res.json("USER REGISTERED");
      }).catch((err) => {
        res.status(400).send({ error: "Korisnik vec postoji!" })
      })
    
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne( { email: email });

  if (!user) {
    res.status(400).send({ error: "Korisnik ne postoji. Ukoliko nemate nalog možete se registrovati." });
    return;
  }

  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res
        .status(400)
        .json({ error: "Wrong Username and Password Combination!" });
    } else {
      const accessToken = createTokens(user);

      res.status(200).send({
          first_name : user.first_name,
          last_name : user.last_name,
          email : user.email,
          phone : user.phone,
          city : user.city,
          created_at : user.created_at,
          updated_at : user.updated_at,
          _id : user._id,
          token: accessToken
      });
    }
  });
});

app.use('/images', express.static(path.join(__dirname, '/images')));

app.listen(8000, function() {
    console.log("Listening to port 8000");
})

