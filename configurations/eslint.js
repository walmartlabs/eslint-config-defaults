'use strict';

var _ = require('lodash');

var bestPractices = require('../rules/eslint/best-practices/eslint.js');
var errors = require('../rules/eslint/errors/eslint.js');
var es6 = require('../rules/eslint/es6/eslint.js');
var legacy = require('../rules/eslint/legacy/eslint.js');
var node = require('../rules/eslint/node/eslint.js');
var strict = require('../rules/eslint/strict/eslint.js');
var style = require('../rules/eslint/style/eslint.js');
var variables = require('../rules/eslint/variables/eslint.js');

var defaults = {
  parser: 'espree',
  env: {
    'browser': false,
    'node': false,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
