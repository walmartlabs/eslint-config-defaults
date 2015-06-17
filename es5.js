'use strict';

var _ = require('lodash');

var bestPractices = require('./best-practices/default.js');
var errors = require('./errors/default.js');
var es6 = require('./es6/off.js');
var legacy = require('./legacy/off.js');
var node = require('./node/off.js');
var strict = require('./strict/default.js');
var style = require('./style/default.js');
var variables = require('./variables/default.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
}

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
