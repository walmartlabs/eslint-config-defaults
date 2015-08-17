<h1 align="center">eslint-config-defaults</h1>

<p align="center">
  <a href="https://nodei.co/npm/eslint-config-defaults/">
    <img src="https://nodei.co/npm/eslint-config-defaults.png?compact=true">
  </a>
</p>

<h4 align="center">
  A composable set of ESLint configurations.
</h4>

***

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-defaults
```

## Usage

**This package is made for for ESLint 0.24.0+**

### Full Configurations

This package includes the following complete and ready to use configurations:

_**Note:**_ Any React config `<prefix>-react` requires [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)

_**Note:**_ Any Walmart config `defaults/configurations/walmart/<suffix>` requires [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)

- `defaults` - The default ESLint config
- `defaults/configurations/airbnb` - Config from the [AirBnB Style Guide](https://github.com/airbnb/javascript)
- `defaults/configurations/eslint` - The default ESLint config
- `defaults/configurations/off` - Turns off all rules. This will be ESLint's default after 1.0.0
- `defaults/configurations/walmart/es5-browser` - Walmart ES5 + browser
- `defaults/configurations/walmart/es5-node` - Walmart ES5 + node
- `defaults/configurations/walmart/es5-test` - Walmart ES5 + test
- `defaults/configurations/walmart/es5` - Walmart ES5 config
- `defaults/configurations/walmart/es6-browser` - Walmart ES6 + browser
- `defaults/configurations/walmart/es6-node` - Walmart ES6 + node
- `defaults/configurations/walmart/es6-react` - Walmart ES6 + react
- `defaults/configurations/walmart/es6-test` - Walmart ES6 + test
- `defaults/configurations/walmart/es6` - Walmart ES6 config

To consume and extend a config in ESLint just add the extends attribute to your `.eslintrc`. For
more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

```yaml
---
"extends":
  - "defaults"
```

```yaml
---
"extends":
  - "defaults/configurations/walmart/es6-browser"
```

### Piecemeal Configurations

ESLint configuration is broken apart in `./rules` containing ESLint's rules and rules for specific ESLint plugins. The full set of ESLint rules (`./rules/eslint`) are broken into categories that mirror ESLint's documentation. Under each rule type there are sets of configuration as well as an `off.js` file which turns off every rule in the category.

###### Examples

```yaml
---
"extends":
  - "defaults/rules/eslint/best-practices/walmart",
  - "defaults/rules/eslint/errors/airbnb"

  - "defaults/rules/eslint/es6/off"
  - "defaults/rules/eslint/legacy/off"
  - "defaults/rules/eslint/node/off"

"env":
  "phantom": true
```

## And A Special Thanks To

* [Nicholas C. Zakas](https://github.com/nzakas) for all the amazing work on [ESLint](https://github.com/eslint/eslint)
* [Keith Cirkel](https://github.com/keithamus) for painstakingly formatting all of ESLint's rules into JSON in [eslint-config-strict](https://github.com/keithamus/eslint-config-strict)
* [AirBnB](https://github.com/airbnb/javascript) for sharing all of their config in [JavaScript Style Guide](https://github.com/airbnb/javascript)

***

## License

[MIT License](http://opensource.org/licenses/MIT)
