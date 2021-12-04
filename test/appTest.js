const expect = require("chai").expect;
// let app = require("../src/app").router;


// Learning the expect BDD chai assertion style
describe("App", function() {
	const test = "abc",
		imTrue = true,
		imUndefined = undefined,
		imArray = [1, 2, 3];

	it("Expect test variable to include abc", function() {
		expect(test).to.have.length(3);
	});

	it("Expect value to be true" , () => {
		expect(imTrue).to.be.true;
	})

	it("Expect value to be undefined" , () => {
		expect(imUndefined).to.be.undefined;
	})

	it("Expect value to be Array" , () => {
		expect(imArray).to.be.a("array");
	})
});
