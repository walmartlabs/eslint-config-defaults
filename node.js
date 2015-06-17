'use strict';

var _ = require('lodash');

var nodeConfig = _.cloneDeep(require('./es5'));
nodeConfig.env.node = true;

module.exports = nodeConfig;
