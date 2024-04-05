require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5454;
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("connected to database!");
  })
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const app = express();
const homeRouter = require("./routes/homeRoutes");
app.use("/", homeRouter);
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const authRoutes=require('./routes/authRoutes.js');
app.use('/auth',authRoutes);
app.listen(PORT, async () => {
  console.log("server is running", PORT);
});
