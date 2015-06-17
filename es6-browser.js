'use strict';

var _ = require('lodash');

module.exports = _.merge(
  {
    env: { browser: true }
  },
  require('./es5.js')
  require('./es6/default.js')
);
