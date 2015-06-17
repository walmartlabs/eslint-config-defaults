'use strict';

var _ = require('lodash');

module.exports = _.merge(
  {},
  require('./defaults'),
  require('./es6/default.js')
);
