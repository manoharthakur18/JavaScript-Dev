const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongooes = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();
app.use(express.json());

mongooes
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err) => console.log("Error ", err));

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.listen("5000", () => {
  console.log("Backed is running");
});
