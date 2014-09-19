var globals = require('./globals/globals');
var should = require('should');

describe('Verification of testing-nools project and dependencies', function () {
	it ('should have a global test object', function () {
  	globals.should.exist;
	})
})
