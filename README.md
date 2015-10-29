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
$ npm install --save-dev eslint eslint-config-defaults
```

## Usage

### Full Configurations

This package includes the following complete and ready to use configurations:

- `defaults` - The config [recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) by ESLint
- `defaults/configurations/airbnb` - Config from the [AirBnB Style Guide](https://github.com/airbnb/javascript)
- `defaults/configurations/google` - The [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
- `defaults/configurations/eslint` - The config [recommended](https://github.com/eslint/eslint/blob/master/conf/eslint.json) by ESLint
- `defaults/configurations/off` - Disable all rules (ESLint's default at 1.0.0+)
- `defaults/configurations/walmart/es5-browser` - Walmart ES5 + browser
- `defaults/configurations/walmart/es5-node` - Walmart ES5 + node
- `defaults/configurations/walmart/es5-test` - Walmart ES5 + test
- `defaults/configurations/walmart/es5` - Walmart ES5 config
- `defaults/configurations/walmart/es6-browser` - Walmart ES6 + browser
- `defaults/configurations/walmart/es6-node` - Walmart ES6 + node
- `defaults/configurations/walmart/es6-react-test` - Walmart ES6 + react + test
- `defaults/configurations/walmart/es6-react` - Walmart ES6 + react
- `defaults/configurations/walmart/es6-test` - Walmart ES6 + test
- `defaults/configurations/walmart/es6` - Walmart ES6 config

###### Dependencies

- AirBnB Config - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react), [babel-eslint](https://github.com/babel/babel-eslint)
- Any Walmart config (`defaults/configurations/walmart/<suffix>`) - [eslint-plugin-filenames](https://github.com/selaux/eslint-plugin-filenames)
- Any React config (`<prefix>-react`) - [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react), [babel-eslint](https://github.com/babel/babel-eslint)

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

**NOTE:** Extending multiple complete configs can cause unexpected results, if you need to do this you should consider a piecemeal config as explained below. See https://github.com/walmartlabs/eslint-config-defaults/issues/38 for details.

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

### This package tracks config in the following versions:

- [ESLint](https://github.com/eslint/eslint) 1.5.1
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) 3.5.0
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) 0.0.7
- [Google JavaScript Style Guide](https://github.com/google/styleguide/tree/43d738ab8bb0c797f78506945729946aacbab17d) 43d738ab8b
- [eslint-plugin-filenames](https://www.npmjs.com/package/eslint-plugin-filenames) 0.1.2

## And A Special Thanks To

* [Nicholas C. Zakas](https://github.com/nzakas) for all the amazing work on [ESLint](https://github.com/eslint/eslint)
* [Keith Cirkel](https://github.com/keithamus) for painstakingly formatting all of ESLint's rules into JSON in [eslint-config-strict](https://github.com/keithamus/eslint-config-strict)
* [AirBnB](https://github.com/airbnb/javascript) for sharing all of their config in [JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Google](https://google.github.io/styleguide/javascriptguide.xml) for sharing their styleguide

***

## License

[MIT License](http://opensource.org/licenses/MIT)
