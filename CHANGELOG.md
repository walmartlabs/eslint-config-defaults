## 9.0.0 (2016-02-10)

#### User Facing Changes

* Correct bug where walmart/es6-node enabled ecma features that are unsupported in node@4
* Add babel-eslint to the walmart config to enable proper es-next parsing
* Add node-runtime configuration
* Update README to specify what node version it tracks
* Update airbnb congif from 2.1.1 -> 5.0.0

## 8.0.2 (2016-01-12)

#### User Facing Changes

* Correct bug where eslint/style configs had duplicate keys

#### Internal Changes

* Add CI (wooooo! thanks @ryan-roemer)

## 8.0.1 (2016-01-08)

#### User Facing Changes

* Correct but where react/no-is-mounted was called react/jsx-no-is-mounted

## 8.0.0 (2016-01-08)

#### User Facing Changes

* Turn on new rules from eslint and eslint-plugin react in Walmart configurations
* Update airbnb config to 2.1.1
* Update all rules for the ESLint 1.10.3
* Update all rules for eslint-plugin-react 3.12.0

## 7.1.1 (2015-10-28)

#### User Facing Changes

* Update docs to include new walmart config

## 7.1.0 (2015-10-28)

#### User Facing Changes

* Add walmart/es6-react-test.js
* Update docs for clarity

## 7.0.1 (2015-10-02)

#### User Facing Changes

* Correct typo in walmart and airbnb config

## 7.0.0 (2015-10-01)

#### User Facing Changes

* Remove deprecated react/jsx-quotes in favor of jsx-quotes
* Update eslint 1.0.0 -> 1.5.1
* Update eslint-react 3.1.0 -> 3.5.0
* Adds use strict back to best-practices
* Fixes defaults extensibility in configuration files

## 6.0.0 (2015-09-01)

#### Internal Changes

* Revert 5.0.0 due to a limitation in ESLint

## 5.0.0 (2015-08-27)

#### Internal Changes

* Convert all js/json to YAML

## 4.2.0 (2015-08-19)

#### User Facing Changes

* Add Google config

## 4.1.1 (2015-08-19)

#### User Facing Changes

* Add missing documentation about babel-eslint dependency

## 4.1.0 (2015-08-17)

#### User Facing Changes

* Add filename enforcement plugin to Walmart configs

## 4.0.2 (2015-08-17)

#### Internal

* Remove dependency on lodash in place of ESLint's merge

## 4.0.1 (2015-08-07)

#### User Facing Changes

* Correct missing comma in React config

## 4.0.0 (2015-08-07)

#### User Facing Changes

* Correct node value in airbnb node config
* Remove environments - they are not generalizable enough to warrant specific config
* Bring up to date with ESLint 1.0.0+ and eslint-plugin-react 3.1.0+ and airbnb 0.0.7

#### Internal Changes

* Add attributions and a thank you section
* Small README corrections
* Add comments in base config to delineate plugins from core

## 3.1.0 (2015-07-06)

#### User Facing Changes

* Turn off react/no-multi-comp in walmart config

## 3.0.3 (2015-07-06)

#### Internal Changes

* Add missing comma that prevented the strict rules from being loaded

## 3.0.2 (2015-07-06)

#### User Facing Changes

* Convert README examples to YAML since shared config is broken in JSON
* Add deprecated ESLint config that was on by default. Will be removed at ESLint 1.0

## 3.0.1 (2015-07-06)

#### User Facing Changes

* Remove `.js` suffix from README configs

#### Internal Changes

* Update repo urls
* Correct lint errors in the project

## 3.0.0 (2015-07-06)

#### User Facing Changes

* Bring config up to date with ESLint 0.24.0
* Add React plugin config
* walmart: Add mocha to es5 test
* walmart: Turn on global strict mode in es6 and es5-node config
* walmart: Turn on all ES6 rules

#### Internal Changes

* Correct improper overrides in walmart/test
* Wrap all properties in " for easier transfer from json <-> javascript
* Correct linting errors

## 2.1.0 (2015-07-05)

#### User Facing Changes

* Correct bug causing walmart configs to fail
* Rename walmart configs for brevity

## 2.0.1 (2015-07-05)

#### Internal Changes

* Update README for readability

## 2.0.0 (2015-07-05)

#### User Facing Changes

* Replace "default" config with named configs (airbnb, walmart, eslint)
* Extract environment config into new directory
* Move rules into eslint directory for cleaner addition of plugins
* Add ESLint's default config and set it to the new default
* Add WalmartLabs config
* Add AirBnB config

#### Internal Changes

* Update lodash

## 1.0.0 (2015-06-25)

#### User Facing Changes

* move complete configurations and rulesets into `configurations` and `rules` respectively
* Add missing changelog entries

#### Internal Changes

* Lint the lint config

## 0.4.0 (2015-06-24)

#### User Facing Changes

* Rev non patch version to support the breaking changes from 0.3.6 -> 0.3.7

## 0.3.7 (2015-06-24)

#### User Facing Changes

* Move config groups into config directory
* Add airbnb style config

#### Internal Changes

* Remove js prop access in favor of object merge
* DRY up es6 configs

## 0.3.6 (2015-06-17)

#### User Facing Changes

* README Updates

## 0.3.5 (2015-06-17)

#### User Facing Changes

* README Updates

## 0.3.4 (2015-06-17)

#### User Facing Changes

* Correct bug that caused some configs not to load

## 0.3.3 (2015-06-17)

#### User Facing Changes

* README Updates
* Correct bug that caused some configs not to load

## 0.3.2 (2015-06-17)

#### User Facing Changes

* README Updates

## 0.3.1 (2015-06-17)

#### User Facing Changes

* README Updates

## 0.3.0 (2015-06-17)

#### User Facing Changes

* Change default to be ES5
* Change ES5 to turn off node and legacy rules
* Create separate ES5 and ES6 config sets

## 0.2.0 (2015-06-16)

#### User Facing Changes

* Initial Release
