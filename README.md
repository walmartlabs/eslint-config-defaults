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
- `defaults/config-complete/off` - Turns off all rules. This will be ESLint's default after 1.0.0
- `defaults/config-complete/es5-browser` - The default ES5 config with browser globals
- `defaults/config-complete/es5-node` - The default ES5 config with node globals and rules
- `defaults/config-complete/es5-test` - The default ES5 config with mocha globals
- `defaults/config-complete/es5` - The default ES5 config
- `defaults/config-complete/es6-browser` - The default ES6 config with browser globals
- `defaults/config-complete/es6-node` - The default ES6 config with node globals and rules
- `defaults/config-complete/es6-test` - The default ES6 config with mocha globals
- `defaults/config-complete/es6` - The default ES6 config

To extend a config in ESLint just add the extends attribute to your `.eslintrc`

```json
{
  "extends": "defaults"
}
```

```json
{
  "extends": "defaults/config-complete/es6-browser"
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
  "extends": ["defaults/config-complete/es6-browser", "defaults/config-components/legacy/defaults.js"]
}
```

```json
{
  "extends": [
    "defaults/config-components/best-practices/default.js",
    "defaults/config-components/errors/default.js"

    "defaults/config-components/es6/off.js"
    "defaults/config-components/legacy/off.js"
    "defaults/config-components/node/off.js"
  ]

  "env" {
    "phantom": true
  }
}
```

***

## License

[MIT License](http://opensource.org/licenses/MIT)
