'use strict';

var es6 = require('./es6');
var legacy = require('./legacy');
var node = require('./node');
var style = require('./style');

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

    plugins: [
        'filenames',
        'one-variable-per-var',
    ],

    rules: {

        // # Possible Errors
        // The following rules point out areas where you might have made mistakes.

        // disallow or enforce trailing commas in object literals
        'comma-dangle': [
            2,
            'always-multiline',
        ],
        // disallow assignment in conditional expressions
        'no-cond-assign': 2,
        // disallow use of console
        'no-console': 2,
        // disallow use of constant expressions in conditions
        'no-constant-condition': 2,
        // disallow control characters in regular expressions
        'no-control-regex': 2,
        // disallow use of debugger
        'no-debugger': 2,
        // disallow duplicate arguments in functions
        'no-dupe-args': 2,
        // disallow duplicate keys when creating object literals
        'no-dupe-keys': 2,
        // disallow a duplicate case label
        'no-duplicate-case': 2,
        // disallow empty statements
        'no-empty': 2,
        // disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 2,
        // disallow assigning to the exception in a catch block
        'no-ex-assign': 2,
        // disallow double-negation boolean casts in a boolean context
        'no-extra-boolean-cast': 2,
        // disallow unnecessary parentheses
        'no-extra-parens': [
            2,
            // only function expressions will be checked for unnecessary parentheses
            "functions"
        ],
        // disallow unnecessary semicolons
        'no-extra-semi': 2,
        // disallow overwriting functions written as function declarations
        'no-func-assign': 2,
        // disallow function or variable declarations in nested blocks
        'no-inner-declarations': 2,
        // disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 2,
        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 2,
        // disallow negation of the left operand of an in expression
        'no-negated-in-lhs': 2,
        // disallow the use of object properties of the global object (Math and JSON)
        // as functions
        'no-obj-calls': 2,
        // disallow multiple spaces in a regular expression literal
        'no-regex-spaces': 2,
        // disallow reserved words being used as object literal keys
        'no-reserved-keys': 0,
        // disallow sparse arrays
        'no-sparse-arrays': 2,
        // disallow unreachable statements after a return, throw, continue, or break
        // statement
        'no-unreachable': 2,
        // disallow comparisons with the value NaN
        'use-isnan': 2,
        // Ensure JSDoc comments are valid
        'valid-jsdoc': 0,
        // Ensure that the results of typeof are compared against a valid string
        'valid-typeof': 2,

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
        'yoda': 2,


        // # Strict Mode
        // These rules relate to using strict mode.

        // require that all functions are run in strict mode
        'strict': [
            2,
            'global',
        ],

        // # Variables
        // These rules have to do with variable declarations.

        // disallow the catch clause parameter name being the same as a variable in the
        // outer scope
        'no-catch-shadow': 2,
        // disallow deletion of variables
        'no-delete-var': 2,
        // disallow labels that share a name with a variable
        'no-label-var': 2,
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 2,
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 2,
        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 2,
        // disallow use of undefined when initializing variables
        'no-undef-init': 2,
        // disallow use of undefined variable
        'no-undefined': 2,
        // disallow declaration of variables that are not used in the code
        'no-unused-vars': 2,
        // disallow use of variables before they are defined
        'no-use-before-define': 2
    },
};

module.exports = _.merge(defaults, es6, legacy, node, style);
