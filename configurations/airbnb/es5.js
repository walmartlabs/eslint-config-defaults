"use strict";

module.exports = {
  "extends": [
    "defaults/rules/eslint/best-practices/airbnb",
    "defaults/rules/eslint/errors/airbnb",
    "defaults/rules/eslint/node/airbnb",
    "defaults/rules/eslint/strict/airbnb",
    "defaults/rules/eslint/style/airbnb",
    "defaults/rules/eslint/variables/airbnb"
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
