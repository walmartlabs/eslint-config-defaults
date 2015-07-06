"use strict";

var _ = require("lodash");

module.exports = _.merge({},
  require("./es5.js"),
  require("../../rules/eslint/es6/walmart.js"), {
    "rules": {
      // All current React builds use Webpack, which bundle CommonJS or AMD style code into a
      // function. If using a _different_ build solution that goes to global scope, you may need to
      // override and tweak this option.
      "strict": [2, "global"]
    }
  }
);
