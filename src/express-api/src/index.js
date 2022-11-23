const express = require("express");

const config = {
	name: "express-api",
	port: 3000,
};

const app = express();

app.get("/", (req, res) => {
	res.status(200).send("Hello from Express!");
});

app.listen(config.port, config.host, (e) => {
	if (e) {
		throw new Error("Internal Server Error");
	}
});
