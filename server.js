// Dependencies
const { PORT, DATABASE_URL } = process.env;
const express = require('express')
const app = express()
const mongoose = require('mongoose')
// Pulls environment vars into serv er js from .env
require('dotenv').config()

mongoose.connect(DATABASE_URL);
  // Database Connection Logs
const db = mongoose.connection
db.on("error", (err) => console.log(err.message))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))


// LISTENER
app.listen(PORT, () =>
  console.log(`Listening to the smoothe sounds of PORT ${PORT}`)
);
