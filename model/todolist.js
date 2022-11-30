const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listSchema = new Schema(
	{
		id: { type: Number, required: true },
		description: { type: String, required: true },
		status: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("todolist", listSchema);