# eslint-config-strict

A set of configurable ESLint configurations.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-defaults
```

## Usage

##### Full Configurations

This set of configs is meant to be extended on a per-project basis as necessary using ESLint's
shareable configs feature. For more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

This package includes the following full configurations:

- `defaults`
- `defaults/browser`
- `defaults/es5`
- `defaults/node`
- `defaults/off`
- `defaults/test`

##### Piecemeal Configurations

Every test in ESLint is broken out into categories in directories that mirror the documentation.
Each of the following directories can be included as a set of defaults or by including the `off.js`
file which turns off every rule in this category.

###### `best-practices`, `errors`, `es6`, `legacy`, `node`, `strict`, `style`, `variables`

Using these you should be able to create the exact starting config you need

```javascript
var _ = require('lodash');

return _.extend(
  {
    env: {
      phantom: true
    }
  },
  require('eslint-config-defaults/best-practices/default'),
  require('eslint-config-defaults/errors/default'),

  require('eslint-config-defaults/es6/off'),
  require('eslint-config-defaults/legacy/off'),
  require('eslint-config-defaults/node/off'),
);
```

### How to use

To extend a config in ESLint just add the extends attribute to your `.eslintrc`

```json
{
  "extends": "defaults"
}
```

or

```json
{
  "extends": "defaults/browser"
}
```

For more details about how shareable configs work, see the [ESLint documentation][shareable configs].

[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs

***

## License

[MIT License](http://opensource.org/licenses/MIT)
