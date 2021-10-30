const express = require("express");
const allRoutes = require("./routes");

const app = express();
const port = 1998;

app.set("view engine", "ejs");
app.use("/", allRoutes);

// to serve static files such as e.g. images or css
app.use(express.static("public"));

app.listen(port, () => {
	console.log(
		`Hey Professor Utonium, the port number is ${port}, the year when this show was aired for the first time!`
	);
});
