'use strict';

var bestPractices = require('./best-practices');
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
    }
};

module.exports = _.merge(defaults, bestPractices, errors, es6, legacy, node, strict, style, variables);
