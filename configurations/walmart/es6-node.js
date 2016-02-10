"use strict";

module.exports = {
  "extends": [
    "defaults/configurations/walmart/es6",
    "defaults/rules/eslint/node/walmart"
  ],
  "ecmaFeatures": {
    // Enable arrow functions
    "arrowFunctions": true,
    // Enable binary literals
    "binaryLiterals": true,
    // Enable let and const (aka block bindings)
    "blockBindings": true,
    // Enable classes
    "classes": false,
    // Enable default function parameters
    "defaultParams": false,
    // Enable destructuring
    "destructuring": false,
    // Enable for-of loops
    "forOf": true,
    // Enable generators
    "generators": true,
    // Enable modules and global strict mode
    "modules": false,
    // Enable computed object literal property names
    "objectLiteralComputedProperties": true,
    // Enable duplicate object literal properties in strict mode
    "objectLiteralDuplicateProperties": false,
    // Enable object literal shorthand methods
    "objectLiteralShorthandMethods": true,
    // Enable object literal shorthand properties
    "objectLiteralShorthandProperties": true,
    // Enable octal literals
    "octalLiterals": true,
    // Enable the regular expression u flag
    "regexUFlag": true,
    // Enable the regular expression y flag
    "regexYFlag": true,
    // Enable the rest parameters
    "restParams": true,
    // Enable the spread operator for arrays
    "spread": true,
    // Enable super references inside of functions
    "superInFunctions": false,
    // Enable template strings
    "templateStrings": true,
    // Enable code point escapes
    "unicodeCodePointEscapes": true,
    // Allow return statements in the global scope
    "globalReturn": false,
    // Enable JSX
    "jsx": false,
    // Enable support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It's recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
    "experimentalObjectRestSpread": false
  },
  rules: {
    // verify super() callings in constructors
    "constructor-super": 0,
    // disallow modifying variables of class declarations
    "no-class-assign": 0,
    // disallow modifying variables that are declared using const
    "no-dupe-class-members": 0,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 0,
    // suggest using Reflect methods where applicable
    "prefer-reflect": 0
  }
};
