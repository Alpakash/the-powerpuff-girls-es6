const express = require("express");
const allRoutes = require("./routes");

const app = express();
const port = 1998;

app.use("/", allRoutes);

app.listen(port, () => {
	console.log(
		`Hey Professor Utonium, the port number is ${port}, the year when this show was aired for the first time!`
	);
});