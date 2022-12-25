import express, { Express } from "express";
const app: Express = express();
import db from "./config/db";
import cors from "cors";
import getall_router from "./routes/getall";
import others_router from "./routes/others";

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});

db();

const corsOpt = {
	origin: "*",
	methods: ["GET", "POST", "DELETE"],
	allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpt));

/* A middleware that parses the body of the request and makes it available in the req.body object. */
app.use(express.json());

app.use("/api/todos", getall_router);
app.use("/api/todo", others_router);
