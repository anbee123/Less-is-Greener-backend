// DEPENDENCIES

// get .env vars
require("dotenv").config();

// get port and db url
const { PORT, DATABASE_URL } = process.env;
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// DATABASE CONNECTION
mongoose.connect(DATABASE_URL);
// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error));
 
// Model
const TopicsSchema = new mongoose.Schema({
  topic: String,
  icon: String,
  image: String,
  titleOne: String,
  urlOne: String,
  titleTwo: String,
  urlTwo: String,
  titleThree: String,
  urlThree: String
});

const Topics = mongoose.model("Topics", TopicsSchema);

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes

// INDEX
app.get("/lessisgreener", async (req, res) => {
  try {
    res.status(200).json(await Topics.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// CREATE
app.post("/lessisgreener", async (req, res) => {
  try {
    res.status(200).json(await Topics.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// DELETE
app.delete("/lessisgreener/:id", async (req, res) => {
  try {
    res.json(await Topics.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// UPDATE
app.put("/lessisgreener/:id", async (req, res) => {
  try {
    res.json(await Topics.findByIdAndUpdate(req.params.id,req.body,{new:true}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// LISTENER
app.listen(PORT, () =>
  console.log(`Listening to the smoothe sounds of PORT ${PORT}`)
);
