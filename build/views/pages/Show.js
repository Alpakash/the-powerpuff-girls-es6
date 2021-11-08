"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Utils = require("../../services/Utils.js");

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getEpisodes = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
		var response, json;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return fetch("https://api.tvmaze.com/shows/" + id + "/episodes");

					case 3:
						response = _context.sent;
						_context.next = 6;
						return response.json();

					case 6:
						json = _context.sent;
						return _context.abrupt("return", json);

					case 10:
						_context.prev = 10;
						_context.t0 = _context["catch"](0);

						console.log("Error getting documents", _context.t0);

					case 13:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 10]]);
	}));

	return function getEpisodes(_x) {
		return _ref.apply(this, arguments);
	};
}();

var Show = {
	render: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
			var request, episodesList, firstButton;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							request = _Utils2.default.parseRequestURL();
							_context2.next = 3;
							return getEpisodes(request.id);

						case 3:
							episodesList = _context2.sent;
							firstButton = document.getElementById("first-button");


							document.getElementById("title").innerHTML = "EPISODES";
							document.getElementById("subtitle").innerText = "";
							document.getElementById("description").innerHTML = "Click on an episode in the list for more information.";
							firstButton.innerHTML = "Back";
							firstButton.classList.remove("hidden");
							firstButton.setAttribute("href", "/#");

							document.getElementById("image").src = "./assets/powerpuff-birth.jpg";

							return _context2.abrupt("return", /*html*/"\n\t\t\t<section class=\"section\">\n\t\t\t\t\t\t" + episodesList.map(function (episode, index) {
								return (/*html*/"\n\t\t\t\t\t\t\t\t\t<div class=\"styled-list\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"#/ep/" + episode.id + "\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"episode-image\" src=\"" + episode.image.medium + "\" />\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<a class=\"episode-link\" href=\"#/ep/" + episode.id + "\">" + episode.name + "</a>\n\t\t\t\t\t\t\t\t\t\t<span class=\"episode-number\">" + (index + 1) + "</span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t"
								);
							}).join("\n ") + "\n\n\t\t\t</section>\n\t\t");

						case 13:
						case "end":
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function render() {
			return _ref2.apply(this, arguments);
		};
	}()
};

exports.default = Show;