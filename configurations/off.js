'use strict';

var _ = require('lodash');

var bestPractices = require('../rules/eslint/best-practices/off.js');
var errors = require('../rules/eslint/errors/off.js');
var es6 = require('../rules/eslint/es6/off.js');
var legacy = require('../rules/eslint/legacy/off.js');
var node = require('../rules/eslint/node/off.js');
var strict = require('../rules/eslint/strict/off.js');
var style = require('../rules/eslint/style/off.js');
var variables = require('../rules/eslint/variables/off.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
