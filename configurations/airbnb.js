"use strict";

module.exports = {
  "extends": [
    "../rules/eslint/best-practices/airbnb.js",
    "../rules/eslint/errors/airbnb.js",
    "../rules/eslint/es6/airbnb.js",
    "../rules/eslint/legacy/airbnb.js",
    "../rules/eslint/node/airbnb.js",
    "../rules/eslint/strict/airbnb.js",
    "../rules/eslint/style/airbnb.js",
    "../rules/eslint/variables/airbnb.js",
    "../rules/react/airbnb.js"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "amd": false,
    "mocha": false,
    "jasmine": false
  },
  "ecmaFeatures": {},
  "globals": {},
  "rules": {}
};
