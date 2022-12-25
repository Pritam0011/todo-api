import express from "express";
import { Response, Request } from "express";
const getall_router = express.Router();
import todolist from "../model/todolist";

getall_router.get("/", async (req: Request, res: Response) => {
	try {
		const list = await todolist.find();
		res.status(200).json(list);
	} catch (err) {
		res.status(503).json({ error: "Something went wrong!" });
	}
});

export default getall_router;
