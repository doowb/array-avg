/*!
 * array-avg <https://github.com/doowb/array-avg>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var sum = require('array-sum');

module.exports = function (arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return sum(arr) / arr.length;
};
