'use strict';

var _ = require('lodash');

var browserConfig = _.cloneDeep(require('./es5'));
browserConfig.env.browser = true;

module.exports = browserConfig;
