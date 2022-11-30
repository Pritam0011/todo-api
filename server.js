const express = require("express");
const app = express();
const db = require("./config/db");
const cors = require("cors");

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

app.use("/api/todos", require("./routes/getall"));
app.use("/api/todo", require("./routes/others"));
