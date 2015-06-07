var expect = require('chai').expect;
var subtract = require("../src/js/functions/subtract");

describe("subtract", function() {
	it("should return the difference of two numbers", function() {
		var result = subtract.calculate(5,5);
		expect(result).to.equal(0);
	});
});