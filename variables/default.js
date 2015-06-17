'use strict';

var _ = require('lodash');

var variables = require('./off.js');
var variablesRules = _.cloneDeep(require('./off.js'));

// disallow the catch clause parameter name being the same as a variable in the outer scope
variablesRules['no-catch-shadow'] = 2;
// disallow deletion of variables
variablesRules['no-delete-var'] = 2;
// disallow labels that share a name with a variable
variablesRules['no-label-var'] = 2;
// disallow shadowing of names such as arguments
variablesRules['no-shadow-restricted-names'] = 2;
// disallow declaration of variables already declared in the outer scope
variablesRules['no-shadow'] = 1;
// disallow use of undefined when initializing variables
variablesRules['no-undef-init'] = 2;
// disallow use of undeclared variables unless mentioned in a /*global */ block
variablesRules['no-undef'] = 2;
// disallow use of undefined variable
variablesRules['no-undefined'] = 2;
// disallow declaration of variables that are not used in the code
variablesRules['no-unused-vars'] = 1;
// disallow use of variables before they are defined
variablesRules['no-use-before-define'] = 2

module.exports = variables;
