'use strict';

var _ = require('lodash');

module.exports = _.merge({},
  require('./walmart-es5.js'),
  require('../rules/eslint/node/walmart.js')
);
