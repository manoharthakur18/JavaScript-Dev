const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongooes = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());

mongooes
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongo");
  })
  .catch((err) => console.log("Error ", err));

app.use("/api/auth", authRoute);

app.listen("5000", () => {
  console.log("Backed is running");
});
