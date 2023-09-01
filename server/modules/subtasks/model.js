const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;
const commonSchema = require("../../server/utilis/commomSchema");

const SubTaskSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  todo: { type: ObjectId, ref: "TODO" },
  ...commonSchema,
});

module.exports = model("subtask", SubTaskSchema);
