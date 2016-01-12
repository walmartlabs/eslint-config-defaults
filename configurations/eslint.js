"use strict";

module.exports = {
  "extends": [
    "defaults/rules/eslint/best-practices/eslint",
    "defaults/rules/eslint/errors/eslint",
    "defaults/rules/eslint/es6/eslint",
    "defaults/rules/eslint/node/eslint",
    "defaults/rules/eslint/strict/eslint",
    "defaults/rules/eslint/style/eslint",
    "defaults/rules/eslint/variables/eslint"
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
