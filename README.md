# eslint-config-strict

A set of configurable ESLint configurations.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint-config-defaults
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary using ESLint's
shareable configs feature. For more details about how shareable configs work, see the
[ESLint documentation](http://eslint.org/docs/developer-guide/shareable-configs).

This package includes the following full configurations:

- `defaults`
- `defaults/browser`
- `defaults/es5`
- `defaults/node`
- `defaults/test`

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
