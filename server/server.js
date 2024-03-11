const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
dotenv.config();

const homeRoute = require("./routes/home");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", homeRoute);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB Successfully");
  app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT);
  });
});
