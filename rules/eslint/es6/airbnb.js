"use strict";

module.exports = {
  "env": {
    "es6": false
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": false,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "jsx": true
  },
  "rules": {
    // verify super() callings in constructors
    "constructor-super": 0,
    // enforce the spacing around the * in generator functions
    "generator-star-spacing": 0,
    // disallow to use this/super before super() calling in constructors.
    "no-this-before-super": 0,
    // require let or const instead of var
    "no-var": 2,
    // require method and property shorthand syntax for object literals
    "object-shorthand": 0,
    // suggest using of const declaration for variables that are never modified after declared
    "prefer-const": 2
  }
};
