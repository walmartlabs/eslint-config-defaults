# eslint-config-strict

A strict ESLint configurations.

## Installation

Install this config package and ESLint:

```bash
$ npm install --save-dev eslint eslint-config-strict
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's [shareable configs][] feature.

This package includes the following configurations:

- `strict`
- `strict/browser`
- `strict/test`

### How to use

Simply define your `.eslintrc` like so:

```json
{
  "extends": "strict"
}
```

Also, you can define a `test/.eslintrc` and use the following:

```json
{
  "extends": "strict/test"
}
```

If your project is a frontend project, you will need an `.eslintrc` that looks
like this:

```json
{
  "extends": "strict/node"
}
```

Feel free to define additional globals or rules, or override them as you see fit:

```json
{
  "extends": "strict/browser",

  "globals": {
    "blarg": true
  },

  "rules": {
      "eol-last": 0
  }
}
```

For more details about how shareable configs work, see the [ESLint documentation][shareable configs].

[shareable configs]: http://eslint.org/docs/developer-guide/shareable-configs
