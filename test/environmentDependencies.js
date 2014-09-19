var testGlobals = require('./globals/globals');
var testData = require('./globals/data');
var should = require('should');

describe('Verification of testing-nools project and dependencies', function () {
	it ('should have a global test object', function () {
  	testGlobals.should.exist;
	})
	it ('should have a data test object', function () {
		testData.should.exist;
	})
})
