const { Schema, model } = require("mongoose");
const commonSchema = require('../../utilis/commomSchema')

const SubTaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
 ...commonSchema
});

module.exports = model("subtask", SubTaskSchema);

