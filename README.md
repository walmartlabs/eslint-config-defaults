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
- `defaults/off` - Turns off all rules. This will be ESLint's default after 1.0.0
- `defaults/es5-browser` - The default ES5 config with browser globals
- `defaults/es5-node` - The default ES5 config with node globals and rules
- `defaults/es5-test` - The default ES5 config with mocha globals
- `defaults/es5` - The default ES5 config
- `defaults/es6-browser` - The default ES6 config with browser globals
- `defaults/es6-node` - The default ES6 config with node globals and rules
- `defaults/es6-test` - The default ES6 config with mocha globals
- `defaults/es6` - The default ES6 config

To extend a config in ESLint just add the extends attribute to your `.eslintrc`

```json
{
  "extends": "defaults"
}
```

```json
{
  "extends": "defaults/es6-browser"
}
```

#### Piecemeal Configurations

ESLint configuration is broken out into categories that mirror the documentation. Each of the
following directories can be included as a set of defaults or by including the `off.js` file which
turns off every rule in this category.

###### `best-practices`, `errors`, `es6`, `legacy`, `node`, `strict`, `style`, `variables`

Using these you should be able to create the exact starting config you need

```json
{
  "extends": ["defaults/es6-browser", "defaults/legacy/defaults.js"]
}
```

```json
{
  "extends": [
    "defaults/best-practices/default.js",
    "defaults/errors/default.js"

    "defaults/es6/off.js"
    "defaults/legacy/off.js"
    "defaults/node/off.js"
  ]

  "env" {
    "phantom": true
  }
}
```

***

## License

[MIT License](http://opensource.org/licenses/MIT)
