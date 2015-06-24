'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./off.js'), {
  env: {
    // enable all ECMAScript 6 features except for modules
    es6: true
  },
  ecmaFeatures: {
    // enable modules and global strict mode
    modules: true
  },
  rules: {
    // enforce the spacing around the * in generator functions
    'generator-star-spacing': 2,
    // require let or const instead of var
    'no-var': 2,
    //require method and property shorthand syntax for object literals
    'object-shorthand': 2,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 2
  }
});
