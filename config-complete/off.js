'use strict';

var _ = require('lodash');

var bestPractices = require('../config-components/best-practices/off.js');
var errors = require('../config-components/errors/off.js');
var es6 = require('../config-components/es6/off.js');
var legacy = require('../config-components/legacy/off.js');
var node = require('../config-components/node/off.js');
var strict = require('../config-components/strict/off.js');
var style = require('../config-components/style/off.js');
var variables = require('../config-components/variables/off.js');

var defaults = {
  env: {},
  ecmaFeatures: {},
  globals: {},
  rules: {}
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
