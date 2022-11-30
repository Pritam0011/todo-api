const router = require("express").Router();
const List = require("../model/todolist");

router.get("/", async (req, res) => {
	try {
		const list = await List.find();
		return res.json(list);
	} catch (err) {
		return res.status(503).json({ error: "Something went wrong!" });
	}
});

module.exports = router;
