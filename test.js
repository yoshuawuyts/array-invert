/*eslint no-unused-expressions: 0*/

/**
 * Module dependencies
 */

var should = require('should');
var invert = require('./index.js');

/**
 * Test
 */

describe('invert()', function() {
  it('should catch errors', function() {
    invert.bind(invert, {})
      .should.throw('Arr should be an array');
  });
  it('should invert an array', function() {
    invert([1, 2, 3, 4, 5]).should.eql([5, 4, 3, 2, 1]);
  });
});
