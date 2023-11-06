const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongooes = require("mongoose");

dotenv.config();

mongooes
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err) => console.log("Error ", err));

app.listen("5000", () => {
  console.log("Backed is running");
});
