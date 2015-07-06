"use strict";

var _ = require("lodash");

var bestPractices = require("../rules/eslint/best-practices/airbnb.js");
var errors = require("../rules/eslint/errors/airbnb.js");
var es6 = require("../rules/eslint/es6/airbnb.js");
var legacy = require("../rules/eslint/legacy/airbnb.js");
var node = require("../rules/eslint/node/airbnb.js");
var strict = require("../rules/eslint/strict/airbnb.js");
var style = require("../rules/eslint/style/airbnb.js");
var variables = require("../rules/eslint/variables/airbnb.js");
var react = require('../rules/react/airbnb.js');

var defaults = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "amd": false,
    "mocha": false,
    "jasmine": false
  },
  "ecmaFeatures": {},
  "globals": {},
  "rules": {}
};

module.exports = _.merge(
  defaults,
  bestPractices,
  errors,
  es6,
  legacy,
  node,
  strict,
  style,
  variables,
  react
);
