const express = require("express");

const config = {
	name: "express-api",
	port: 3000,
};

const app = express();

app.get("/", (req, res) => {
	const data = [
		{ name: "James", age: 22 },
		{ name: "John", age: 25 },
	];
	res.status(200).type("application/json").send(data);
});

app.listen(config.port, config.host, (e) => {
	if (e) {
		throw new Error("Internal Server Error");
	}
});
