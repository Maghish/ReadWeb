import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import homeRoute from "./routes/home";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", homeRoute);

mongoose.connect(process.env.MONGO_URI!).then(() => {
  console.log("Connected to MongoDB Successfully");
  app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT);
  });
});
