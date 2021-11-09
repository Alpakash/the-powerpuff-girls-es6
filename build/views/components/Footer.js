"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Bottombar = {
	render: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var view;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							view = /*html*/"\n\t\t <footer class=\"border-t border-gray-200 \">\n\t\t\t<div\n\t\t\t\tclass=\"\n\t\t\t\t\tcontainer\n\t\t\t\t\tflex flex-col flex-wrap\n\t\t\t\t\tpx-4\n\t\t\t\t\tpy-16\n\t\t\t\t\tmx-auto\n\t\t\t\t\tmd:items-center\n\t\t\t\t\tlg:items-start\n\t\t\t\t\tmd:flex-row md:flex-nowrap\n\t\t\t\t\"\n\t\t\t>\n\t\t\t\t<div\n\t\t\t\t\tclass=\"flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left\"\n\t\t\tstyle=\"-webkit-transform: scaleX(-1);transform: scaleX(-1);\"\n\t\t\t\t>\n\t\t\t\t\t<img src=\"./assets/proff.png\" width=\"150px;\">\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"justify-between w-full mt-4 text-center lg:flex\">\n\t\t\t\t\t<div class=\"w-full px-4 lg:w-1/3 md:w-1/2\">\n\t\t\t\t\t\t<h2 class=\"mb-2 font-bold tracking-widest text-gray-900\">\n\t\t\t\t\t\t\tAbout this wonderful app\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t <p class=\"mt-2 text-sm text-gray-500\">\n\t\t\t\t\t\tSugar, spice, and everything nice.\n\t\t\t\t\t\tThese were the ingredients chosen to create the perfect little girl, but Professor Utonium accidentally\n\t\t\t\t\t\tadded an extra ingredient to the concoction-- Chemical X!\n\t\t\t\t\t\tThus, The Powerpuff Girls were born. Using their ultra-super powers Blossom, Bubbles, and Buttercup\n\t\t\t\t\t\thave dedicated their lives to fighting crime and the forces of evil!\n\t\t\t\t \t </p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"w-full px-4 lg:w-1/3 md:w-1/2 text-right\">\n\t\t\t\t\t\t<h2 class=\"mb-2 font-bold tracking-widest text-gray-900\">\n\t\t\t\t\t\t\tQuick Navigation\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<ul class=\"mb-8 space-y-2 text-sm list-none\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/#\" class=\"text-gray-600 hover:text-gray-800\">Home</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/#/show/1955\" class=\"text-gray-600 hover:text-gray-800\">Episodes</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/#/ep/160178\" class=\"text-gray-600 hover:text-gray-800\">First Episode</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/#/cube\" class=\"text-gray-600 hover:text-gray-800\">Random 3D Cube</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</footer>\n\t\t";
							return _context.abrupt("return", view);

						case 2:
						case "end":
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function render() {
			return _ref.apply(this, arguments);
		};
	}()
};

exports.default = Bottombar;