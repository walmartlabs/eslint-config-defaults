'use strict';

module.exports = {
  // enforces error handling in callbacks (node environment)
  'handle-callback-err': [
      2,
      // name of error argument
      '^.*(e|E)rr(or)?$',
  ],
  // disallow mixing regular variable and require declarations
  'no-mixed-requires': 2,
  // disallow use of new operator with the require function
  'no-new-require': 2,
  // disallow string concatenation with __dirname and __filename
  'no-path-concat': 2,
  // disallow process.exit()
  'no-process-exit': 2,
  // restrict usage of specified node modules
  'no-restricted-modules': 2,
};
