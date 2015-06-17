'use strict';

var _ = require('lodash');

module.exports = _.merge(
  {
    env: { mocha: true },
    rules: { 'max-nested-callbacks': 0 }
  },
  require('./es5.js')
  require('./es6/default.js')
);
