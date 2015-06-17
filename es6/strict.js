'use strict';

var es6Rules = _.cloneDeep(require('./off.js'));

// enforce the spacing around the * in generator functions
es6Rules['generator-star-spacing'] = 2;
// require let or const instead of var
es6Rules['no-var'] = 2;
//require method and property shorthand syntax for object literals
es6Rules['object-shorthand'] = 2;
// suggest using of const declaration for variables that are never modified after declared
es6Rules['prefer-const'] = 0;

module.exports = es6Rules;
