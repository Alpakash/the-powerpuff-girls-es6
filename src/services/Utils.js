const Utils = {
	//  Parse a url and break it into resource, id and verb
	parseRequestURL: () => {
		const url = location.hash.slice(1).toLowerCase() || "/";
		const r = url.split("/");

		const request = {
			resource: undefined,
			id: undefined,
			verb: undefined,
		};

		request.resource = r[1];
		request.id = r[2];
		request.verb = r[3];

		return request;
	}
};

export default Utils;
