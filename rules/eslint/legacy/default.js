'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./off.js'), {
  rules: {
    // specify the maximum depth that blocks can be nested
    'max-depth': [2, 4],
    // specify the maximum length of a line in your program
    'max-len': [2, 100, 2],
    // limits the number of parameters that can be used in the function declaration.
    'max-params': [2, 4],
    // specify the maximum number of statement allowed in a function
    'max-statements': [2, 15],
    // disallow use of bitwise operators
    'no-bitwise': 2
  }
});