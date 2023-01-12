// Dependencies
const { PORT, DATABASE_URL } = process.env;
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// Pulls environment vars into serv er js from .env
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

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
