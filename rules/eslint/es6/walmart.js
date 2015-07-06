"use strict";

module.exports = {
  "env": {
    "es6": true
  },
  "ecmaFeatures": {
    "modules": true
  },
  "rules": {
    // verify super() callings in constructors
    "constructor-super": 2,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 2,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 2,
    // require let or const instead of var
    "no-var": 2,
    // require method and property shorthand syntax for object literals
    "object-shorthand": 2,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2
  }
};
