/**
 * @jest-environment jsdom
 */

const assert = require("chai").assert;
import { router, sum } from "../src/app";

// Learning the assert TDD chai assertion style
describe("Testing the testing", function () {
	const test = "abc",
		imTrue = true,
		imUndefined = undefined,
		imArray = [1, 2, 3];

	it("The router should be a function", () => {
		assert.isFunction(router, "message");
	});

	it("Test variable should have a length of 3", () => {
		assert.lengthOf(test, 3);
	});

	it("Value should return true", () => {
		assert.isTrue(imTrue, "Should return true");
	});

	it("Value should be undefined", () => {
		assert.isUndefined(imUndefined, "Should return undefined");
	});

	it("Value should be an Array", () => {
		assert.isArray(imArray, "Should return Array");
	});

	it("Check if assertion is a deepEqual", () => {
		assert.deepEqual({ tea: "green" }, { tea: "green" });
	});
});

test("Testing sum function", () => {
	assert.equal(sum(1, 2), 3, "1 + 2 should equal 3");
	expect
});
