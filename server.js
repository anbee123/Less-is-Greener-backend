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



// LISTENER
app.listen(PORT, () =>
  console.log(`Listening to the smoothe sounds of PORT ${PORT}`)
);
