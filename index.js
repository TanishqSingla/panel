const express = require("express");
const path = require("path");

const app = express();

//mock db
const data = { addCount: 0, updateCount: 0 };

app.use("/public", express.static(path.join(__dirname + "/public")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/add", (req, res) => {
	data.addCount++;
	const response = { message: "add", updateCount: data.addCount };
	res.status(200).json(response);
});

app.post("/update", (req, res) => {
	data.updateCount++;
	const response = { message: "update", updateCount: data.updateCount };
	res.status(200).json(response);
});

app.listen(5000, () => console.log("Server listening on port 5000"));
