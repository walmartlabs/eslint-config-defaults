'use strict';

var _ = require('lodash');

var bestPractices = require('./best-practices/off.js');
var errors = require('./errors/off.js');
var es6 = require('./es6/off.js');
var legacy = require('./legacy/off.js');
var node = require('./node/off.js');
var strict = require('./strict/off.js');
var style = require('./style/off.js');
var variables = require('./variables/off.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
}

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
