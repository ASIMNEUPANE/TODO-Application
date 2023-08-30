const { Schema, model } = require("mongoose");

const SubTaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  created_at: { type: Date, default: Date.now() },
});

module.exports = model("subtask", SubTaskSchema);
