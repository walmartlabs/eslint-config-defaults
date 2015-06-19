'use strict';

var _ = require('lodash');

var legacy = _.cloneDeep(require('./off.js'));
var legacyRules = legacy.rules;

// specify the maximum depth that blocks can be nested
legacyRules['max-depth'] = [2, 4];
// specify the maximum length of a line in your program
legacyRules['max-len'] = [2, 100, 2];
// limits the number of parameters that can be used in the function declaration.
legacyRules['max-params'] = [2, 4];
// specify the maximum number of statement allowed in a function
legacyRules['max-statements'] = [2, 15];
// disallow use of bitwise operators
legacyRules['no-bitwise'] = 2;

module.exports = legacy;
