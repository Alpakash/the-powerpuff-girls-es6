const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT;

// serve static files such as e.g. images or css
app.use(express.static("src"));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(port, () => {
	console.log(
		`Hey Professor Utonium, the port number is ${port}, the year when this show was aired for the first time!`
	);
});
