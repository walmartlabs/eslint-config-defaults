'use strict';

var _ = require('lodash');

module.exports = _.merge({},
  require('./es6.js'),
  require('../../environments/browser.js')
);
