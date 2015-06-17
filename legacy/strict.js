'use strict';

var _ = require('lodash');

var legacy = _.cloneDeep(require('./off.js'));
var legacyRules = legacy.rules;

// specify the maximum depth that blocks can be nested
legacyRules.['max-depth'] = 0;
// specify the maximum length of a line in your program
legacyRules.['max-len'] = [2, 100, 4];
// limits the number of parameters that can be used in the function declaration.
legacyRules.['max-params'] = [1, 5];
// specify the maximum number of statement allowed in a function
legacyRules.['max-statements'] = 0;
// disallow use of bitwise operators
legacyRules.['no-bitwise'] = 0;
// disallow use of unary operators, ++ and --
legacyRules.['no-plusplus'] = 0;

module.exports = legacy;
