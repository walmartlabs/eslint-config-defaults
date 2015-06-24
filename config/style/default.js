'use strict';

var _ = require('lodash');

module.exports = _.merge({}, require('./off.js'), {
  rules: {
    // enforce one true brace style
    'brace-style': [2, "1tbs", { "allowSingleLine": true }],
    // require camel case names
    'camelcase': 2,
    // enforce spacing before and after comma
    'comma-spacing': 2,
    // enforce one true comma style
    'comma-style': 2,
    // enforces consistent naming when capturing the current execution context
    'consistent-this': [2, "self"],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 2,
    // enforces spacing between keys and values in object literal properties
    'key-spacing': 2,
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [2, 3],
    // use two spaces for indentation
    'indent': [2, 2],
    // require a capital letter for constructors
    'new-cap': 2,
    // disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 2,
    // disallow use of the Array constructor
    'no-array-constructor': 2,
    // disallow if as the only statement in an else block
    'no-lonely-if': 2,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 2,
    // disallow nested ternary expressions
    'no-nested-ternary': 2,
    // disallow use of the Object constructor
    'no-new-object': 2,
    // disallow space between function identifier and application
    'no-spaced-func': 2,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 2,
    // disallow multiple empty lines
    'no-multiple-empty-lines': 2,
    // disallow wrapping of non-IIFE statements in parens
    'no-wrap-func': 2,
    // allow just one var statement per function
    'one-var': [2, "never"],
    // allow just one var statement per function
    'operator-assignment': [2, "always"],
    // specify whether double or single quotes should be used
    'quotes': [1, "single", "avoid-escape"],
    // require or disallow use of semicolons instead of ASI
    'semi': 2,
    // enforce spacing before and after semicolons
    'semi-spacing': 2,
    // require a space after certain keywords
    'space-after-keywords': 2,
    // require or disallow space before blocks
    'space-before-blocks': 2,
    // require or disallow space before function opening parenthesis
    'space-before-function-paren': [2, {anonymous: "always", named: "never" }],
    // require or disallow spaces inside parentheses
    'space-in-parens': 2,
    // require spaces around operators
    'space-infix-ops': 2,
    // require a space after return, throw, and case
    'space-return-throw-case': 2,
    // require a space around word operators such as typeof
    'space-unary-ops': 2,
    // require or disallow a space immediately following  the // in a line comment
    'spaced-line-comment': 2
  }
});
