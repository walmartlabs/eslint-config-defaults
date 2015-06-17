'use strict';

var errors = require('./errors');
var es6 = require('./es6');
var legacy = require('./legacy');
var node = require('./node');
var strict = require('./strict');
var style = require('./style');
var variables = require('./variables');

var defaults = {
    ecmaFeatures: {
        // enable parsing of arrow functions
        arrowFunctions: true,
        // enable parsing of binary literals
        binaryLiterals: true,
        // enable parsing of let/const
        blockBindings: true,
        // enable parsing classes
        classes: true,
        // enable parsing of default parameters
        defaultParams: true,
        // enable parsing of destructured arrays and objects
        destructuring: true,
        // enable parsing of for-of statement
        forOf: true,
        // enable parsing of generators/yield
        generators: true,
        // enable parsing of modules
        modules: true,
        // enable parsing computed object literal properties
        objectLiteralComputedProperties: true,
        // Allow duplicate object literal properties (except '__proto__')
        objectLiteralDuplicateProperties: true,
        // enable parsing of shorthand object literal methods
        objectLiteralShorthandMethods: true,
        // enable parsing of shorthand object literal properties
        objectLiteralShorthandProperties: true,
        // enable parsing of ES6 octal literals
        octalLiterals: true,
        // enable parsing of regular expression y flag
        regexYFlag: true,
        // enable parsing of regular expression u flag
        regexUFlag: true,
        // enable parsing of rest parameters
        restParams: true,
        // enable parsing spread operator
        spread: true,
        // enable super references inside of functions
        superInFunctions: true,
        // enable parsing of template strings
        templateStrings: true,
        // enable parsing unicode code point escape sequences
        unicodeCodePointEscapes: true,
        // enable return in global scope
        globalReturn: true,
        // enable React JSX parsing
        jsx: false,
    },

    env: {
        node: true
    },

    rules: {
        // # Best Practices
        // These are rules designed to prevent you from making mistakes. They either
        // prescribe a better way of doing something or help you avoid footguns.

        // Enforces getter/setter pairs in objects
        'accessor-pairs': 2,
        // treat var statements as if they were block scoped
        'block-scoped-var': 0,
        // specify the maximum cyclomatic complexity allowed in a program
        'complexity': [
            2,
        // Maximum cycolmatic complexity
            10,
        ],
      // require return statements to either always or never specify values
        'consistent-return': 2,
        // specify curly brace conventions for all control statements
        'curly': 2,
        // require default case in switch statements
        'default-case': 2,
        // encourages use of dot notation whenever possible
        'dot-notation': 2,
        // enforces consistent newlines before or after dots
        'dot-location': [
            2,
            // require the dot to be on the same line as the property
            'property',
        ],
        // require the use of === and !==
        'eqeqeq': 2,
        // make sure for-in loops have an if statement
        'guard-for-in': 0,
        // disallow the use of alert, confirm, and prompt
        'no-alert': 2,
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 2,
        // disallow division operators explicitly at beginning of regular expression
        'no-div-regex': 2,
        // disallow else after a return in an if
        'no-else-return': 2,
        // disallow use of labels for anything other then loops and switches
        'no-empty-label': 2,
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 2,
        // disallow use of eval()
        'no-eval': 2,
        // disallow adding to native types
        'no-extend-native': 2,
        // disallow unnecessary function binding
        'no-extra-bind': 2,
        // disallow fallthrough of case statements
        'no-fallthrough': 2,
        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 2,
        // disallow use of eval()-like methods
        'no-implied-eval': 2,
        // disallow usage of __iterator__ property
        'no-iterator': 2,
        // disallow use of labeled statements
        'no-labels': 0,
        // disallow unnecessary nested blocks
        'no-lone-blocks': 2,
        // disallow creation of functions within loops
        'no-loop-func': 2,
        // disallow use of multiple spaces
        'no-multi-spaces': 2,
        // disallow use of multiline strings
        'no-multi-str': 2,
        // disallow reassignments of native objects
        'no-native-reassign': 2,
        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 2,
        // disallow use of new operator for Function object
        'no-new-func': 2,
        // disallows creating new instances of String,Number, and Boolean
        'no-new-wrappers': 2,
        // disallow use of (old style) octal literals
        'no-octal': 2,
        // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        'no-octal-escape': 2,
        // disallow reassignment of function parameters
        'no-param-reassign': 2,
        // disallow use of process.env
        'no-process-env': 0,
        // disallow usage of __proto__ property
        'no-proto': 2,
        // disallow declaring the same variable more then once
        'no-redeclare': 2,
        // disallow use of assignment in return statement
        'no-return-assign': 2,
        // disallow use of `javascript:` urls.
        'no-script-url': 2,
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,
        // disallow use of comma operator
        'no-sequences': 2,
        // restrict what can be thrown as an exception
        'no-throw-literal': 2,
        // disallow usage of expressions in statement position
        'no-unused-expressions': 2,
        // disallow use of void operator
        'no-void': 2,
        // disallow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': [
            2,
            {
                // Disallowed warning terms
                'terms': [
                    'todo',
                    'fixme',
                    'xxx',
                ],
                // Comment location to check
                'location': 'anywhere',
            },
        ],
        // disallow use of the with statement
        'no-with': 2,
        // require use of the second argument for parseInt()
        'radix': 2,
        // requires to declare all vars on top of their containing scope
        'vars-on-top': 0,
        // require immediate function invocation to be wrapped in parentheses
        'wrap-iife': 2,
        // require or disallow Yoda conditions
        'yoda': 2
    },
};

module.exports = _.merge(defaults, errors, es6, legacy, node, strict, style, variables);
