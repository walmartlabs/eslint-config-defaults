"use strict";

module.exports = {
  "env": {
    "es6": false
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "forOf": true,
    "generators": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "templateStrings": true
  },
  "rules": {
    // require braces in arrow function body
    "arrow-body-style": 0,
    // require parens in arrow function arguments
    "arrow-parens": [2, "always"],
    // require space before/after arrow function's arrow
    "arrow-spacing": [2, {"before": true, "after": true}],
    // verify super() callings in constructors
    "constructor-super": 0,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 0,
    // disallow arrow functions where a condition is expected
    "no-arrow-condition": 2,
    // disallow modifying variables of class declarations
    "no-class-assign": 0,
    // disallow modifying variables that are declared using const
    "no-const-assign": 0,
    // disallow duplicate name in class members
    "no-dupe-class-members": 0,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 0,
    // require let or const instead of var
    "no-var": 0,
    // require method and property shorthand syntax for object literals
    "object-shorthand": 0,
    // suggest using arrow functions as callbacks
    "prefer-arrow-callback": 0,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2,
    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,
    // suggest using the spread operator instead of .apply()
    "prefer-spread": 0,
    // suggest using template literals instead of strings concatenation
    "prefer-template": 0,
    // disallow generator functions that do not have yield
    "require-yield": 0
  }
};
