"use strict";

var _ = require("lodash");

module.exports = _.merge({},
  require("./es6.js"),
  require("../../rules/react/walmart.js"), {
    "globals": {
      "fetch": false              // Expect a `fetch` polyfill.
    },
    "rules": {
      "no-extra-parens": 0,       // Want `return (<Foo />);` to be allowed.
      "no-var": 2
    }
  }
);
