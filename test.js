/*!
 * array-avg <https://github.com/doowb/array-avg>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var avg = require('./');

describe('array-avg', function () {
  it('should average an array of numbers', function () {
    assert.equal(avg([1, 2, 3, 4, 5]), 3);
    assert.equal(avg(['1', '2', 3, '4', 5]), 3);
    assert.equal(avg([1, 'foo', 2, 4, {}, 5]), 2);
  });
});
