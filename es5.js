'use strict';

var _ = require('lodash');

var es5Config = _.cloneDeep(require('./defaults'))
_.merge(es5Config, require('./es6/off.js'))

module.exports = es5Config;
