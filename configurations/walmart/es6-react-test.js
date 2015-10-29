"use strict";

module.exports = {
  "extends": [
    "defaults/configurations/walmart/es6",
    "defaults/rules/react/walmart"
  ],
  "globals": {
    "fetch": false
  },
  "env": {
    "mocha": true
  },
  "rules": {
    "max-nested-callbacks": 0,
    "no-extra-parens": 0,
    "no-var": 2
  }
};
