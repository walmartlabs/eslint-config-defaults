"use strict";

module.exports = {
  "rules": {
    // specify the maximum depth that blocks can be nested
    "max-depth": 0,
    // specify the maximum length of a line in your program
    "max-len": [2, 80, 4, {ignoreComments: true, ignoreUrls: true, ignorePattern: "^\\s*var\\s.+=\\s*require\\s*\\("}],
    // limits the number of parameters that can be used in the function declaration.
    "max-params": 0,
    // specify the maximum number of statement allowed in a function
    "max-statements": 0,
    // disallow use of bitwise operators
    "no-bitwise": 0,
    // disallow use of unary operators, ++ and --
    "no-plusplus": 0
  }
};
