/**
 * Module dependencies.
 */

var assert = require('assert');

/**
 * Invert an array.
 *
 * @param {Any[]} arr
 * @return {Any[]}
 * @api public
 */

module.exports = function arrayInvert(arr) {

  var arrErr = 'Arr should be an array';
  assert('[object Array]' == Object.prototype.toString.call(arr), arrErr);

  var newArr = [];

  for(var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
}
