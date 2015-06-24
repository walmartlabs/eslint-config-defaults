'use strict';

var _ = require('lodash');

var bestPractices = require('./config/best-practices/default.js');
var errors = require('./config/errors/default.js');
var es6 = require('./config/es6/off.js');
var legacy = require('./config/legacy/off.js');
var node = require('./config/node/off.js');
var strict = require('./config/strict/default.js');
var style = require('./config/style/default.js');
var variables = require('./config/variables/default.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
