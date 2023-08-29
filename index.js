require("dotenv").config();
const express = require("express");
const { mongoose } = require("mongoose");
const app = express();



const port = process.env.PORT || "3000";
const indexROuter = require("./routes");

app.use(express.json)

app.use("/", indexROuter);


mongoose.connect(process.env.DB_URL).then(() => {
  console.log("database connected");
});

app.use((err, req, res, next) => {
  err = err ? err.toString() : "something went wrong..";
  res.status(500).json({ data: "", msg: err });
});

app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});
