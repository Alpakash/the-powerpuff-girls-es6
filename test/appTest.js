const assert = require("chai").assert;
const router = require("../src/app").router;

// Learning the assert TDD chai assertion style
describe("App", function() {
	const test = "abc",
		imTrue = true,
		imUndefined = undefined,
		imArray = [1, 2, 3];


	it("Let this test fail", () => {
		console.log(router);

		assert.isFunction("", "message");
	})

	it("Test variable should have a length of 3", () => {
		assert.lengthOf(test, 3);
	});

	it("Value should return true", () => {
		assert.isTrue(imTrue, "Should return true");
	});

	it("Value should be undefined" , () => {
		assert.isUndefined(imUndefined, "Should return undefined");
	})

	it("Value should be an Array" , () => {
		assert.isArray(imArray, "Should return Array");
	})

	it("Check if assertion is a deepEqual", () => {
		assert.deepEqual({ tea: "green" }, { tea: "green" });
	})
});
