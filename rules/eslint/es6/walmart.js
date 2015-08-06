"use strict";

module.exports = {
  "env": {
    "es6": true
  },
  "ecmaFeatures": {
    "modules": true
  },
  "rules": {
    // require parens in arrow function arguments
    "arrow-parens": 0,
    // require space before/after arrow function's arrow
    "arrow-spacing": 0,
    // verify super() callings in constructors
    "constructor-super": 2,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 2,
    // disallow modifying variables of class declarations
    "no-class-assign": 0,
    // disallow modifying variables that are declared using const
    "no-const-assign": 0,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 2,
    // require let or const instead of var
    "no-var": 2,
    // require method and property shorthand syntax for object literals
    "object-shorthand": 2,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2,
    // suggest using the spread operator instead of .apply()
    "prefer-spread": 0,
    // suggest using Reflect methods where applicable
    "prefer-reflect": 0,
    // disallow generator functions that do not have yield
    "require-yield": 0
  }
};
