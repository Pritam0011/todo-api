import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const url: string = process.env.MONGODB_CONNECTION_URL || "";
function db() {
	mongoose.connect(url);
	const connection = mongoose.connection;

	connection.once("open", () => {
		console.log("Database Connected Successfully");
	});
}

export default db;
