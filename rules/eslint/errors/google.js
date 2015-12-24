"use strict";

module.exports = {
  "rules": {
    // disallow trailing commas in object literals
    "comma-dangle": 0,
    // disallow assignment in conditional expressions
    "no-cond-assign": 0,
    // disallow use of console
    "no-console": 0,
    // disallow use of constant expressions in conditions
    "no-constant-condition": 0,
    // disallow control characters in regular expressions
    "no-control-regex": 0,
    // disallow use of debugger
    "no-debugger": 0,
    // disallow duplicate arguments in functions
    "no-dupe-args": 0,
    // disallow duplicate keys when creating object literals
    "no-dupe-keys": 0,
    // disallow a duplicate case label.
    "no-duplicate-case": 0,
    // disallow the use of empty character classes in regular expressions
    "no-empty-character-class": 0,
    // disallow empty statements
    "no-empty": 0,
    // disallow assigning to the exception in a catch block
    "no-ex-assign": 0,
    // disallow double-negation boolean casts in a boolean context
    "no-extra-boolean-cast": 0,
    // disallow unnecessary parentheses
    "no-extra-parens": 2,
    // disallow unnecessary semicolons
    "no-extra-semi": 0,
    // disallow overwriting functions written as function declarations
    "no-func-assign": 0,
    // disallow function or variable declarations in nested blocks
    "no-inner-declarations": [2, "functions"],
    // disallow invalid regular expression strings in the RegExp constructor
    "no-invalid-regexp": 0,
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": 0,
    // disallow negation of the left operand of an in expression
    "no-negated-in-lhs": 0,
    // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-obj-calls": 0,
    // disallow multiple spaces in a regular expression literal
    "no-regex-spaces": 0,
    // disallow sparse arrays
    "no-sparse-arrays": 0,
    // Avoid code that looks like two expressions but is actually one
    "no-unexpected-multiline": 0,
    // disallow unreachable statements after a return, throw, continue, or break statement
    "no-unreachable": 0,
    // disallow comparisons with the value NaN
    "use-isnan": 0,
    // ensure JSDoc comments are valid
    "valid-jsdoc": 2,
    // ensure that the results of typeof are compared against a valid string
    "valid-typeof": 0
  }
};
