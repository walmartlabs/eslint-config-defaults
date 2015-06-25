'use strict';

var _ = require('lodash');

var bestPractices = require('../rules/best-practices/off.js');
var errors = require('../rules/errors/off.js');
var es6 = require('../rules/es6/off.js');
var legacy = require('../rules/legacy/off.js');
var node = require('../rules/node/off.js');
var strict = require('../rules/strict/off.js');
var style = require('../rules/style/off.js');
var variables = require('../rules/variables/off.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
