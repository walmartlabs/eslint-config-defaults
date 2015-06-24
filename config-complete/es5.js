'use strict';

var _ = require('lodash');

var bestPractices = require('../config-components/best-practices/default.js');
var errors = require('../config-components/errors/default.js');
var es6 = require('../config-components/es6/off.js');
var legacy = require('../config-components/legacy/off.js');
var node = require('../config-components/node/off.js');
var strict = require('../config-components/strict/default.js');
var style = require('../config-components/style/default.js');
var variables = require('../config-components/variables/default.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
