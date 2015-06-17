'use strict';

var _ = require('lodash');

var style = _.cloneDeep(require('./off.js'));
var styleRules = style.rules;

// enforce one true brace style
styleRules.brace-style: [2, "1tbs", { "allowSingleLine": true }];
// require camel case names
styleRules.camelcase: 2;
// enforce spacing before and after comma
styleRules.comma-spacing: 2;
// enforce one true comma style
styleRules.comma-style: 2;
// enforces consistent naming when capturing the current execution context
styleRules.consistent-this: [2, "self"];
// enforce newline at the end of file, with no multiple empty lines
styleRules.eol-last: 2;
// require function expressions to have a name
styleRules.func-names: 0;
// enforces use of function declarations or expressions
styleRules.func-style: 0;
// enforces spacing between keys and values in object literal properties
styleRules.key-spacing: 2;
// specify the maximum depth callbacks can be nested
styleRules.max-nested-callbacks: 0;
// use two spaces for indentation
styleRules.indent: [2, 2];
// require a capital letter for constructors
styleRules.new-cap: 2;
// disallow the omission of parentheses when invoking a constructor with no arguments
styleRules.new-parens: 2;
// disallow use of the Array constructor
styleRules.no-array-constructor: 2;
// disallow if as the only statement in an else block
styleRules.no-lonely-if: 0;
// disallow mixed spaces and tabs for indentation
styleRules.no-mixed-spaces-and-tabs: 2;
// disallow nested ternary expressions
styleRules.no-nested-ternary: 2;
// disallow use of the Object constructor
styleRules.no-new-object: 1;
// disallow space between function identifier and application
styleRules.no-spaced-func: 2;
// disallow the use of ternary operators
styleRules.no-ternary: 0;
// disallow trailing whitespace at the end of lines
styleRules.no-trailing-spaces: 2;
// disallow multiple empty lines
styleRules.no-multiple-empty-lines: 2;
// disallow dangling underscores in identifiers
styleRules.no-underscore-dangle: 0;
// disallow wrapping of non-IIFE statements in parens
styleRules.no-wrap-func: 2;
// allow just one var statement per function
styleRules.one-var: 0;
// enforce padding within blocks
styleRules.padded-blocks: 0;
// specify whether double or single quotes should be used
styleRules.quotes: [1, "single", "avoid-escape"];
// require quotes around object literal property names
styleRules.quote-props: 0;
// require or disallow use of semicolons instead of ASI
styleRules.semi: [2, "always"];
// enforce spacing before and after semicolons
styleRules.semi-spacing: 2;
// sort variables within the same declaration block
styleRules.sort-vars: 0;
// require a space after certain keywords
styleRules.space-after-keywords: [2, "always"];
// require or disallow space before blocks
styleRules.space-before-blocks: 2;
// require or disallow space before function opening parenthesis
styleRules.space-before-function-paren: [2, "never"];
// require or disallow spaces inside brackets
styleRules.space-in-brackets: 0;
// require or disallow spaces inside parentheses
styleRules.space-in-parens: 0;
// require spaces around operators
styleRules.space-infix-ops: 2;
// require a space after return, throw, and case
styleRules.space-return-throw-case: 2;
// require a space around word operators such as typeof
styleRules.space-unary-ops: 2;
// require or disallow a space immediately following  the // in a line comment
styleRules.spaced-line-comment: 2;
// require regex literals to be wrapped in parentheses
styleRules.wrap-regex: 0;

module.exports = style;
