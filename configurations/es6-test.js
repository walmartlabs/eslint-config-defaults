'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./es6.js'), {
  env: { mocha: true },
  rules: { 'max-nested-callbacks': 0 }
});
