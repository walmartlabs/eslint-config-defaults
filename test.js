'use strict';

var _ = require('lodash');

var testConfig = _.clone(require('./defaults'))
testConfig.env.mocha = true;
testConfig.rules['max-nested-callbacks'] = 0;

module.exports = testConfig;
