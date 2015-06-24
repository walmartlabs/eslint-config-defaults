'use strict';

var _ = require('lodash');

var bestPractices = require('../config/best-practices/off.js');
var errors = require('../config/errors/off.js');
var es6 = require('../config/es6/off.js');
var legacy = require('../config/legacy/off.js');
var node = require('../config/node/off.js');
var strict = require('../config/strict/off.js');
var style = require('../config/style/off.js');
var variables = require('../config/variables/off.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
