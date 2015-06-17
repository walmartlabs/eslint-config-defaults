'use strict';

var _ = require('lodash');

var bestPractices = require('./best-practices/');
var errors = require('./errors/');
var es6 = require('./es6/');
var legacy = require('./legacy/');
var node = require('./node/');
var strict = require('./strict/');
var style = require('./style/');
var variables = require('./variables/');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
}

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
