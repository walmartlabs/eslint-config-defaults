"use strict";

module.exports = {
  "extends": [
    "defaults/configurations/walmart/es5",
    "defaults/rules/eslint/es6/walmart"
  ],
  "parser": "babel-eslint",
  "rules": {
    "strict": [2, "global"]
  }
};
