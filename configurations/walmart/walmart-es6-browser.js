'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./walmart-es6.js'), require('../environments/browser.js'));
