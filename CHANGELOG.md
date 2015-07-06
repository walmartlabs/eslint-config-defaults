## 3.0.1 (2015-07-06)

#### User Facing Changes

* Remove `.js` siffix from readme configs

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
