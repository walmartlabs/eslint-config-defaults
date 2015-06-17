'use strict';

var _ = require('lodash');

var node = _.cloneDeep(require('./off.js'));
var nodeRules = node.rules;

// Node.js global variables and Node.js-specific rules.
es6.env.node = true;

// enforces error handling in callbacks (node environment)
nodeRules['handle-callback-err'] = [
    2,
    // name of error argument
    '^.*(e|E)rr(or)?$'
];
// disallow mixing regular variable and require declarations
nodeRules['no-mixed-requires'] = [1, true];
// disallow use of new operator with the require function
nodeRules['no-new-require'] = 2;
// disallow string concatenation with __dirname and __filename
nodeRules['no-path-concat'] = 2;
// disallow process['exit()
nodeRules['no-process-exit'] = 0;
// restrict usage of specified node modules
nodeRules['no-restricted-modules'] = 0;
// disallow use of synchronous methods (off by default)
nodeRules['no-sync'] = 0

module.exports = node;
