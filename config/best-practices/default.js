'use strict';

var _ = require('lodash');

var bestPractices = _.cloneDeep(require('./off.js'));
var bestPracticesRules = bestPractices.rules;

// Enforces getter/setter pairs in objects
bestPracticesRules['accessor-pairs'] = 2;
// treat var statements as if they were block scoped
bestPracticesRules['block-scoped-var'] = 1;
// specify the maximum cyclomatic complexity allowed in a program
bestPracticesRules['complexity'] = [2, 11];
// require return statements to either always or never specify values
bestPracticesRules['consistent-return'] = 2;
// specify curly brace conventions for all control statements
bestPracticesRules['curly'] = [2, "all"];
// require default case in switch statements
bestPracticesRules['default-case'] = 2;
// encourages use of dot notation whenever possible
bestPracticesRules['dot-notation'] = [2, { allowKeywords: true }];
// enforces consistent newlines before or after dots
bestPracticesRules['dot-location'] = [2, "property"];
// require the use of === and !==
bestPracticesRules['eqeqeq'] = 2;
// make sure for-in loops have an if statement
bestPracticesRules['guard-for-in'] = 1;
// disallow the use of alert, confirm, and prompt
bestPracticesRules['no-alert'] = 2;
// disallow use of arguments.caller or arguments.callee
bestPracticesRules['no-caller'] = 2;
// disallow division operators explicitly at beginning of regular expression
bestPracticesRules['no-div-regex'] = 1;
// disallow else after a return in an if
bestPracticesRules['no-else-return'] = 1;
// disallow use of labels for anything other then loops and switches
bestPracticesRules['no-empty-label'] = 2;
// disallow comparisons to null without a type-checking operator
bestPracticesRules['no-eq-null'] = 2;
// disallow use of eval()
bestPracticesRules['no-eval'] = 2;
// disallow adding to native types
bestPracticesRules['no-extend-native'] = 2;
// disallow unnecessary function binding
bestPracticesRules['no-extra-bind'] = 2;
// disallow fallthrough of case statements
bestPracticesRules['no-fallthrough'] = 2;
// disallow the use of leading or trailing decimal points in numeric literals
bestPracticesRules['no-floating-decimal'] = 2;
// disallow use of eval()-like methods
bestPracticesRules['no-implied-eval'] = 2;
// disallow usage of __iterator__ property
bestPracticesRules['no-iterator'] = 2;
// disallow use of labeled statements
bestPracticesRules['no-labels'] = 2;
// disallow unnecessary nested blocks
bestPracticesRules['no-lone-blocks'] = 2;
// disallow creation of functions within loops
bestPracticesRules['no-loop-func'] = 2;
// disallow use of multiple spaces
bestPracticesRules['no-multi-spaces'] = 2;
// disallow use of multiline strings
bestPracticesRules['no-multi-str'] = 2;
// disallow reassignments of native objects
bestPracticesRules['no-native-reassign'] = 2;
// disallow use of new operator when not part of the assignment or comparison
bestPracticesRules['no-new'] = 2;
// disallow use of new operator for Function object
bestPracticesRules['no-new-func'] = 2;
// disallows creating new instances of String,Number, and Boolean
bestPracticesRules['no-new-wrappers'] = 2;
// disallow use of (old style) octal literals
bestPracticesRules['no-octal'] = 2;
// disallow use of octal escape sequences in string literals, such as var foo = "Copyright \050";
bestPracticesRules['no-octal-escape'] = 2;
// disallow reassignment of function parameters
bestPracticesRules['no-param-reassign'] = 2;
// disallow use of process.env
bestPracticesRules['no-process-env'] = 2;
// disallow usage of __proto__ property
bestPracticesRules['no-proto'] = 2;
// disallow declaring the same variable more then once
bestPracticesRules['no-redeclare'] = 2;
// disallow use of assignment in return statement
bestPracticesRules['no-return-assign'] = 2;
// disallow use of `javascript:` urls.
bestPracticesRules['no-script-url'] = 2;
// disallow comparisons where both sides are exactly the same
bestPracticesRules['no-self-compare'] = 2;
// disallow use of comma operator
bestPracticesRules['no-sequences'] = 2;
// restrict what can be thrown as an exception
bestPracticesRules['no-throw-literal'] = 2;
// disallow usage of expressions in statement position
bestPracticesRules['no-unused-expressions'] = 2;
// disallow use of the with statement
bestPracticesRules['no-with'] = 2;
// require use of the second argument for parseInt()
bestPracticesRules['radix'] = 2;
// requires to declare all vars on top of their containing scope
bestPracticesRules['vars-on-top'] = 1;
// require immediate function invocation to be wrapped in parentheses
bestPracticesRules['wrap-iife'] = [2, "inside"];
// require or disallow Yoda conditions
bestPracticesRules['yoda'] = [2, "never"];

module.exports = bestPractices;
