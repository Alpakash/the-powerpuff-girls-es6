let express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/shows", (req, res) => {
	res.render("shows");
});

router.get("/show/:name", (req, res) => {
	res.render("show", { showName: req.params.name });
});

router.get("/show/ep/:number", (req, res) => {
	res.render("episode", { number: req.params.number });
});

module.exports = router;
