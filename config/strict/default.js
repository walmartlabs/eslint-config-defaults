'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./off.js'), {
  rules: {
    'strict': [2, 'global']
  }
});
