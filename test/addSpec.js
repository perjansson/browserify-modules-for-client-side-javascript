var expect = require('chai').expect;
var add = require("../src/js/functions/add");

describe("add", function() {
	it("should return the sum of two numbers", function() {
		var result = add.calculate(5,5);
		expect(result).to.equal(10);
	});
});