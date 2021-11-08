"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var Navbar = {
	render: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var view;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							document.getElementById("footer_container").classList.remove("hidden");

							view = /*html*/"\n\t\t\t<div class=\"relative bg-white overflow-hidden\">\n\t\t\t\t<div class=\"mx-auto\">\n\t\t\t\t\t<div class=\"relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 max-w-5xl lg:w-full lg:pb-28 xl:pb-32\">\n\t\t\t\t\t\t<svg class=\"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2\" fill=\"currentColor\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n\t\t\t\t\t\t\t<polygon points=\"50,0 100,0 50,100 0,100\" />\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"relative pt-6 px-4 sm:px-6 lg:px-8\">\n\t\t\t\t\t\t\t\t<nav class=\"relative flex items-center justify-between sm:h-10 lg:justify-start\" aria-label=\"Global\">\n\t\t\t\t\t\t\t\t\t<div class=\"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"flex items-center justify-between w-full md:w-auto\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"/#\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">Professor Utonium</span>\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"h-8 w-auto sm:h-10\" src=\"./assets/proff.png\">\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"md:block md:ml-10 md:pr-4 md:space-x-8\">\n\t\t\t\t\t\t\t\t\t\t<a class=\"font-medium text-gray-500 hover:text-gray-900\" href=\"/#/\">Home</a>\n\t\t\t\t\t\t\t\t\t\t<a class=\"font-medium text-gray-500 hover:text-gray-900\" href=\"/#/show/1955\">Episodes</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<main class=\"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28\">\n\t\t\t\t\t\t\t\t<img id=\"title-image\" width=\"150px\" class=\"mb-5 absolute bottom-0 right-20\" />\n\t\t\t\t\t\t\t\t<div class=\"sm:text-center lg:text-left\">\n\t\t\t\t\t\t\t\t\t<h3 id=\"airdate\" class=\"block xl:inline italic text-3xl\"></h3>\n\t\t\t\t\t\t\t\t\t<h1 class=\"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl\">\n\t\t\t\t\t\t\t\t\t\t<div id=\"title\" class=\"block xl:inline\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- Here comes the title -->\n\t\t\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\t\t<div id=\"subtitle\" class=\"block text-indigo-600 xl:inline\">\n\t\t\t\t\t\t\t\t\t\t\t<!-- Here comes the subtitle -->\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t\t\t\t<p id=\"description\" class=\"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0\">\n\t\t\t\t\t\t\t\t\t\t<!-- Here comes the description -->\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<div class=\"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"rounded-md shadow\">\n\t\t\t\t\t\t\t\t\t\t\t<a id=\"first-button\" href=\"#\" class=\"hidden w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<!-- Here comes the button -->\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</main>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2\">\n\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\tid=\"image\"\n\t\t\t\t\t\t\t\tclass=\"object-cover m:h-72 w-full\"\n\t\t\t\t\t\t\t/>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
							return _context.abrupt("return", view);

						case 3:
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

exports.default = Navbar;