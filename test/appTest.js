const assert = require("chai").assert;
const app = require("../src/app");

// Learning the assert TDD chai assertion style
describe("App", function() {
	const test = "abc",
		imTrue = true,
		imUndefined = undefined,
		imArray = [1, 2, 3];

	describe("Let this test fail", () => {
		console.log(app.routes);

		assert.isFunction("", "[message]");
	})

	describe("Test variable should have a length of 3", () => {
		assert.lengthOf(test, 3);
	});

	describe("Value should return true", () => {
		assert.isTrue(imTrue, "Should return true");
	});

	describe("Value should be undefined" , () => {
		assert.isUndefined(imUndefined, "Should return undefined");
	})

	describe("Value should be an Array" , () => {
		assert.isArray(imArray, "Should return Array");
	})

	describe("Check if assertion is a deepEqual", () => {
		assert.deepEqual({ tea: "green" }, { tea: "green" });
	})
});
