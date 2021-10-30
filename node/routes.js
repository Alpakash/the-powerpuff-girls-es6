let express = require("express");

let router = express.Router();
const path = require("path");

function searchFromRoot(htmlFile) {
	return path.join(__dirname, `../${htmlFile}.html`);
}

router.get("/", (req, res) => {
	res.sendFile(searchFromRoot("index"));
});

router.get("/shows", (req, res) => {
	res.sendFile(searchFromRoot("/pages/shows"));
});

router.get("/show/:name", (req, res) => {
	res.sendFile(searchFromRoot("/pages/show"));
});

router.get("/show/ep/:number", (req, res) => {
	res.sendFile(searchFromRoot("/pages/episode"));
});

module.exports = router;