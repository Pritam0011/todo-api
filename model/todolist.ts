import mongoose from "mongoose";
const Schema = mongoose.Schema;

const listSchema = new Schema(
	{
		id: { type: Number, required: true },
		description: { type: String, required: true },
		status: { type: String, required: true },
	},
	{ timestamps: true }
);

export default mongoose.model("todolist", listSchema);
