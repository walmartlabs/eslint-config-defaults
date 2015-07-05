'use strict';

var _ = require('lodash');

module.exports = _.merge({
    env: { mocha: true }
  },
  require('./es6.js'),
  require('../../environments/test.js')
);
