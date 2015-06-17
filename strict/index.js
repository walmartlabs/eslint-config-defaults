'use strict';

var _ = require('lodash');

var strict = require('./off.js');
var strictRules = strict.rules;

strictRules['strict'] = [2, "global"];

module.exports = strictRules;
