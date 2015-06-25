# eslint-config-strict

A set of configurable ESLint configurations.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-defaults
```

## Usage

#### Full Configurations

This set of configs is meant to be extended on a per-project basis as necessary using ESLint's
shareable configs feature. For more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

This package includes the following full configurations:

- `defaults` - The default ES5 config
- `defaults/configurations/off` - Turns off all rules. This will be ESLint's default after 1.0.0
- `defaults/configurations/es5-browser` - The default ES5 config with browser globals
- `defaults/configurations/es5-node` - The default ES5 config with node globals and rules
- `defaults/configurations/es5-test` - The default ES5 config with mocha globals
- `defaults/configurations/es5` - The default ES5 config
- `defaults/configurations/es6-browser` - The default ES6 config with browser globals
- `defaults/configurations/es6-node` - The default ES6 config with node globals and rules
- `defaults/configurations/es6-test` - The default ES6 config with mocha globals
- `defaults/configurations/es6` - The default ES6 config

To extend a config in ESLint just add the extends attribute to your `.eslintrc`

```json
{
  "extends": "defaults"
}
```

```json
{
  "extends": "defaults/configurations/es6-browser"
}
```

#### Piecemeal Configurations

ESLint rules are broken out into categories that mirror the documentation. Each of the following
directories can be included as a set of defaults or by including the `off.js` file which turns off
every rule in this category.

###### `best-practices`, `errors`, `es6`, `legacy`, `node`, `strict`, `style`, `variables`

Using these you can create the exact starting config you need

```json
{
  "extends": ["defaults/configurations/es6-browser", "defaults/rules/legacy/defaults.js"]
}
```

```json
{
  "extends": [
    "defaults/rules/best-practices/default.js",
    "defaults/rules/errors/default.js"

    "defaults/rules/es6/off.js"
    "defaults/rules/legacy/off.js"
    "defaults/rules/node/off.js"
  ]

  "env" {
    "phantom": true
  }
}
```

***

## License

[MIT License](http://opensource.org/licenses/MIT)
