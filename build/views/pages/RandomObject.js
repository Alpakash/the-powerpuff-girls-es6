"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var RandomObject = {
	render: function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
			var view;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							document.getElementById("image").innerHTML = null;
							document.getElementById("title").innerHTML = null;
							document.getElementById("subtitle").innerHTML = null;
							document.getElementById("description").innerHTML = null;

							view = /*html*/"\n\t\t\t<model-viewer\n\t\t\t\tsrc=\"./assets/circle.glb\"\n\t\t\t\talt=\"A 3D model of a circle\"\n\t\t\t\tauto-rotate\n\t\t\t\tauto-rotate-delay=0\n\t\t\t\trotation-per-second=\"60deg\"\n\t\t\t\tinteraction-prompt=\"none\"\n\t\t\t\tcamera-controls=\"\"\n\t\t\t\tbackground-color=\"#455A64\"\n\t\t\t></model-viewer>\n\t\t";
							return _context.abrupt("return", view);

						case 6:
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

exports.default = RandomObject;