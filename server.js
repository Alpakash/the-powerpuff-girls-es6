const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.SERVER_PORT || 8080;

// Specify root to serve static files e.g. image or css files
app.use(express.static("src"));

app.get("/", (req, res) => {
	res.sendFile("index.html");
});

app.listen(port, () => {
	console.log(
		`Hey professor, the server is running on port number ${port}!`
	);
});
