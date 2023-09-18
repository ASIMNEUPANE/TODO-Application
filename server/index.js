require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const indexROuter = require("./routes");
const { mongoose } = require("mongoose");

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("database connected");
});

app.use(cors());

const port = +process.env.PORT || 3000;

app.use(express.json());

app.use("/", indexROuter);

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong..";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
