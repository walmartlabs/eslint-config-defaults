'use strict';

var _ = require('lodash');

module.exports = _.merge(
  {},
  require('./es5'),
  require('./es6/default.js');
  require('./node/default.js');
);
