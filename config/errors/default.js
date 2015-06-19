'use strict';

var _ = require('lodash');

var errors = _.cloneDeep(require('./off.js'));
var errorRules = errors.rules;

// disallow trailing commas in object literals
errorRules['comma-dangle'] = 2;
// disallow assignment in conditional expressions
errorRules['no-cond-assign'] = 2;
// disallow use of console
errorRules['no-console'] = 2;
// disallow use of constant expressions in conditions
errorRules['no-constant-condition'] = 2;
// disallow control characters in regular expressions
errorRules['no-control-regex'] = 2;
// disallow use of debugger
errorRules['no-debugger'] = 2;
// disallow duplicate arguments in functions
errorRules['no-dupe-args'] = 2;
// disallow duplicate keys when creating object literals
errorRules['no-dupe-keys'] = 2;
// disallow a duplicate case label.
errorRules['no-duplicate-case'] = 2;
// disallow the use of empty character classes in regular expressions
errorRules['no-empty-character-class'] = 2;
// disallow empty statements
errorRules['no-empty'] = 2;
// disallow assigning to the exception in a catch block
errorRules['no-ex-assign'] = 2;
// disallow double-negation boolean casts in a boolean context
errorRules['no-extra-boolean-cast'] = 2;
// disallow unnecessary parentheses
errorRules['no-extra-parens'] = 2;
// disallow unnecessary semicolons
errorRules['no-extra-semi'] = 2;
// disallow overwriting functions written as function declarations
errorRules['no-func-assign'] = 2;
// disallow function or variable declarations in nested blocks
errorRules['no-inner-declarations'] = 1;
// disallow invalid regular expression strings in the RegExp constructor
errorRules['no-invalid-regexp'] = 2;
// disallow irregular whitespace outside of strings and comments
errorRules['no-irregular-whitespace'] = 2;
// disallow negation of the left operand of an in expression
errorRules['no-negated-in-lhs'] = 2;
// disallow the use of object properties of the global object (Math and JSON) as functions
errorRules['no-obj-calls'] = 2;
// disallow multiple spaces in a regular expression literal
errorRules['no-regex-spaces'] = 1;
// disallow reserved words being used as object literal keys
errorRules['no-reserved-keys'] = 1;
// disallow sparse arrays
errorRules['no-sparse-arrays'] = 2;
// disallow unreachable statements after a return, throw, continue, or break statement
errorRules['no-unreachable'] = 2;
// disallow comparisons with the value NaN
errorRules['use-isnan'] = 2;
// ensure JSDoc comments are valid
errorRules['valid-jsdoc'] = 2;
// ensure that the results of typeof are compared against a valid string
errorRules['valid-typeof'] = 2;

module.exports = errors;
