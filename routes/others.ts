const others_router = require("express").Router();
import { Response, Request } from "express";
import todolist from "../model/todolist";

others_router.get("/", (req: Request, res: Response) => {
	res.status(200).json({ success: "ok" });
});

others_router.post("/", async (req: Request, res: Response) => {
	// store into database
	const list = new todolist({
		id: Date.now(),
		description: req.body.description,
		status: "pending",
	});

	const response = await list.save();
	return res.status(200).json({
		id: response.id,
	});
});

others_router.get("/:id", async (req: Request, res: Response) => {
	try {
		const list = await todolist.findOne({ id: req.params.id });
		if (list) {
			return res.status(200).json(list);
		} else {
			return res.status(404).json({ error: "Not Found on Database" });
		}
	} catch (err) {
		return res.status(503).json({ error: "Something went wrong!" });
	}
});
others_router.post("/:id/done", async (req: Request, res: Response) => {
	try {
		const list = await todolist.findOne({ id: req.params.id });
		if (list) {
			list.status = "done";
			const response = await list.save();
			return res.status(200).json({ status: "done" });
		} else {
			return res.status(404).json({ error: "Not Found on Database" });
		}
	} catch (err) {
		return res.status(503).json({ error: "Something went wrong!" });
	}
});
others_router.delete("/:id/delete", async (req: Request, res: Response) => {
	try {
		const list = await todolist.findOne({ id: req.params.id });
		if (list) {
			await todolist.deleteOne({ id: req.params.id });
			return res.status(200).json({ delete: "done" });
		} else {
			return res.status(404).json({ error: "Not Found on Database" });
		}
	} catch (err) {
		return res.status(503).json({ error: "Something went wrong!" });
	}
});

export default others_router;
