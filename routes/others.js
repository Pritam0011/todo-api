const router = require("express").Router();
const List = require("../model/todolist");

router.get("/", (req, res) => {
	res.send(200);
	res.status(200);
});

router.post("/", async (req, res) => {
	// store into database
	const list = new List({
		id: Date.now(),
		description: req.body.description,
		status: "pending",
	});

	const response = await list.save();
	return res.status(200).json({
		id: response.id,
	});
});

router.get("/:id", async (req, res) => {
	try {
		const list = await List.findOne({ id: req.params.id });
		if (list) {
			return res.status(200).json(list);
		} else {
			return res.status(404).json({ error: "Not Found on Database" });
		}
	} catch (err) {
		return res.status(503).json({ error: "Something went wrong!" });
	}
});
router.post("/:id/done", async (req, res) => {
	try {
		const list = await List.findOne({ id: req.params.id });
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
router.delete("/:id/delete", async (req, res) => {
	try {
		const list = await List.findOne({ id: req.params.id });
		if (list) {
			await List.deleteOne({ id: req.params.id });
			return res.status(200).json({ delete: "done" });
		} else {
			return res.status(404).json({ error: "Not Found on Database" });
		}
	} catch (err) {
		return res.status(503).json({ error: "Something went wrong!" });
	}
});

module.exports = router;
