"use strict";

module.exports = {
  "extends": [
    "../rules/eslint/best-practices/eslint.js",
    "../rules/eslint/errors/eslint.js",
    "../rules/eslint/es6/eslint.js",
    "../rules/eslint/legacy/eslint.js",
    "../rules/eslint/node/eslint.js",
    "../rules/eslint/strict/eslint.js",
    "../rules/eslint/style/eslint.js",
    "../rules/eslint/variables/eslint.js"
  ],
  "parser": "espree",
  "env": {
    "browser": false,
    "node": false,
    "amd": false,
    "mocha": false,
    "jasmine": false
  },
  "ecmaFeatures": {},
  "globals": {},
  "rules": {}
};
