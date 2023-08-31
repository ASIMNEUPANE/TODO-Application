const { Schema, model } = require("mongoose");
const { ObjectId } = Schema;

const commonSchema = require("../../utilis/commomSchema");

const TodoSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  todo: { type: ObjectId },
  ...commonSchema,
});

module.exports = model("Todo", TodoSchema);
