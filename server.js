const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT || 80 /* || 1998*/;

// Specify root to serve static files e.g. image or css files
app.use(express.static("src"));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(port, () => {
	console.log(
		`Hey Professor Utonium, the port number is ${port}, not 1998, the port this show was aired for the first time!`
	);
});
