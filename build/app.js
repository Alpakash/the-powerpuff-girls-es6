'use strict';

var _Home = require('./views/pages/Home.js');

var _Home2 = _interopRequireDefault(_Home);

var _Show = require('./views/pages/Show.js');

var _Show2 = _interopRequireDefault(_Show);

var _Episode = require('./views/pages/Episode.js');

var _Episode2 = _interopRequireDefault(_Episode);

var _Error = require('./views/pages/Error404.js');

var _Error2 = _interopRequireDefault(_Error);

var _RandomCube = require('./views/pages/RandomCube.js');

var _RandomCube2 = _interopRequireDefault(_RandomCube);

var _Navbar = require('./views/components/Navbar.js');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./views/components/Footer.js');

var _Footer2 = _interopRequireDefault(_Footer);

var _Utils = require('./services/Utils.js');

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// List of supported routes. Any url other than these routes will throw a 404 error
var routes = {
	'/': _Home2.default,
	'/show/:id': _Show2.default,
	'/ep/:id': _Episode2.default,
	'/cube': _RandomCube2.default
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
var router = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var header, content, footer, request, parsedURL, page;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						header = document.getElementById('header_container');
						content = document.getElementById('page_container');
						footer = document.getElementById('footer_container');

						// Render the Header and footer of the page

						_context.next = 5;
						return _Navbar2.default.render();

					case 5:
						header.innerHTML = _context.sent;
						_context.next = 8;
						return _Footer2.default.render();

					case 8:
						footer.innerHTML = _context.sent;


						// Get the parsed URL
						request = _Utils2.default.parseRequestURL();

						// Parse the URL and if it has an id part, change it with the string ":id"

						parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '');
						// Get the page from our hash of supported routes.
						// If the parsed URL is not in our list of supported routes, select the 404 page instead

						page = routes[parsedURL] ? routes[parsedURL] : _Error2.default;
						_context.next = 14;
						return page.render();

					case 14:
						_context.t0 = _context.sent;
						_context.t1 = undefined;

						if (!(_context.t0 === _context.t1)) {
							_context.next = 20;
							break;
						}

						content.innerHTML = "";
						_context.next = 23;
						break;

					case 20:
						_context.next = 22;
						return page.render();

					case 22:
						content.innerHTML = _context.sent;

					case 23:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function router() {
		return _ref.apply(this, arguments);
	};
}();

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);