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
		{ name: "Frank", age: 30 },
		{ name: "Peter", age: 33 },
	];
	res.status(200).type("application/json").send(data);
});

app.get("/deep/url", (req, res) => {
	const data = [
		{ name: "James", age: 22 },
		{ name: "John", age: 26 }
	];
	res.status(200).type("application/json").send(data);
});

app.listen(config.port, config.host, (e) => {
	if (e) {
		throw new Error("Internal Server Error");
	}
});
