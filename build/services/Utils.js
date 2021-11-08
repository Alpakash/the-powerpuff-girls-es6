"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Utils = {
	//  Parse a url and break it into resource, id and verb
	parseRequestURL: function parseRequestURL() {
		var url = location.hash.slice(1).toLowerCase() || "/";
		var r = url.split("/");

		var request = {
			resource: undefined,
			id: undefined,
			verb: undefined
		};

		request.resource = r[1];
		request.id = r[2];
		request.verb = r[3];

		return request;
	}
};

exports.default = Utils;