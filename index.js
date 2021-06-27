const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");

//initalize dotenv
const dotenv = require("dotenv").config();
//mongodb configg
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }, () => {
  console.log("DB Connected");
});
//Middleware start here
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);


app.listen(process.env.port, () => {
  console.log(`Backend server is running port number ${process.env.port}`);
});
