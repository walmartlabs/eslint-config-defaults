'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./es5.js'), require('../rules/es6/default.js'));
