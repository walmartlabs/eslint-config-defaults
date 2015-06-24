'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./off.js'), {
  rules: {
    // enforce one true brace style
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    // require camel case names
    'camelcase': [2, { 'properties': 'never' }],
    // enforce spacing before and after comma
    'comma-spacing': [2, {'before': false, 'after': true }],
    // enforce one true comma style
    'comma-style': [2, 'last'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // require function expressions to have a name
    'func-names': 1,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': [2, {'beforeColon': false, 'afterColon': true }],
    // use two spaces for indentation
    'indent': [2, 2],
    // require a capital letter for constructors
    'new-cap': [2, { 'newIsCap': true }],
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 2,
    // disallow multiple empty lines
    'no-multiple-empty-lines': [2, {'max': 2}],
    // disallow wrapping of non-IIFE statements in parens
    'no-wrap-func': 2,
    // enforce padding within blocks
    'padded-blocks': [2, 'never'],
    // specify whether double or single quotes should be used
    'quotes': [2, 'single', 'avoid-escape'],
    // enforce spacing before and after semicolons
    'semi-spacing': {'before': false, 'after': true},
    // require or disallow use of semicolons instead of ASI
    'semi': [2, 'always'],
    // require a space after certain keywords
    'space-after-keywords': 2,
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, 'never'],
    // require spaces around operators
    'space-infix-ops': 2,
    // require a space after return, throw, and case
    'space-return-throw-case': 2,
    // require or disallow a space immediately following the // in a line comment
    'spaced-line-comment': 2
  }
});
