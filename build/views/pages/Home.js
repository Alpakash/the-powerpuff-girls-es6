"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getShow = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var response, json;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return fetch("https://api.tvmaze.com/search/shows?q=the%20powerpuff%20girls");

					case 3:
						response = _context.sent;
						_context.next = 6;
						return response.json();

					case 6:
						json = _context.sent;
						return _context.abrupt("return", json[1]);

					case 10:
						_context.prev = 10;
						_context.t0 = _context["catch"](0);

						console.log("Error getting documents", err);

					case 13:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, undefined, [[0, 10]]);
	}));

	return function getShow() {
		return _ref.apply(this, arguments);
	};
}();

var Home = {
	render: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
			var data, show, firstButton, image;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return getShow();

						case 2:
							data = _context2.sent;
							show = data.show;
							firstButton = document.getElementById("first-button");
							image = document.getElementById("image");


							image.src = show.image.original;
							image.setAttribute("alt", "The powerpuff girls are flying");
							document.getElementById("title").innerHTML = show.name;
							document.getElementById("subtitle").innerText = show.network.name;
							document.getElementById("description").innerHTML = show.summary;
							firstButton.innerHTML = "Episode List";
							firstButton.classList.remove("hidden");
							firstButton.setAttribute("href", "#/show/" + show.id);

						case 14:
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

exports.default = Home;