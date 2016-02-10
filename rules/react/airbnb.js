"use strict";

module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": false
  },
  "rules": {
    // Prevent missing displayName in a React component definition
    "react/display-name": [0, { "acceptTranspilerName": false }],
    // Forbid certain propTypes
    "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
    // Enforce boolean attributes notation in JSX
    "react/jsx-boolean-value": [2, "never"],
    // Validate closing bracket location in JSX
    "react/jsx-closing-bracket-location": [2, "line-aligned"],
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    "react/jsx-curly-spacing": [0, "never", { "allowMultiline": true }],
    // Enforce event handler naming conventions in JSX
    "react/jsx-handler-names": [0, {
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],
    // Validate props indentation in JSX
    "react/jsx-indent-props": [2, 2],
    // Validate JSX has key prop when in array or iterator
    "react/jsx-key": 0,
    // Limit maximum of props on a single line in JSX
    "react/jsx-max-props-per-line": [0, { "maximum": 1 }],
    // Prevent usage of .bind() and arrow functions in JSX props
    "react/jsx-no-bind": 2,
    // Prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": [0, { "ignoreCase": false }],
    // Prevent usage of isMounted
    "react/no-is-mounted": 2,
    // Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals": 0,
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef": 2,
    // Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": 0,
    // Enforce quote style for JSX attributes
    "react/jsx-quotes": 0,
    // Enforce propTypes declarations alphabetical sorting
    "react/jsx-sort-prop-types": [0, {
      "ignoreCase": false,
      "callbacksLast": false
    }],
    // Enforce props alphabetical sorting
    "react/jsx-sort-props": [0, {
      "ignoreCase": false,
      "callbacksLast": false
    }],
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": [2, { "pragma": "React" }],
    // Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": 2,
    // Prevent usage of dangerous JSX properties
    "react/no-danger": 0,
    // Prevent usage of deprecated methods
    "react/no-deprecated": [1, { "react": "0.14.0" }],
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": [2, "allow-in-func"],
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": [2, "allow-in-func"],
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": 0,
    // Prevent multiple component definition per file
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    // Prevent usage of setState
    "react/no-set-state": 0,
    // Prevent using string references in ref attribute.
    "react/no-string-refs": 0,
    // Prevent usage of unknown DOM property
    "react/no-unknown-property": 0,
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": [2, "always"],
    // Prevent missing props validation in a React component definition
    "react/prop-types": [2, { "ignore": [], "customValidators": [] }],
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope": 2,
    // Restrict file extensions that may be required
    "react/require-extension": [0, { "extensions": [".jsx"] }],
    // Prevent extra closing tags for components without children
    "react/self-closing-comp": 2,
    // Enforce component methods order
    "react/sort-comp": [2, {
      "order": [
        "lifecycle",
        "/^on.+$/",
        "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
        "everything-else",
        "/^render.+$/",
        "render"
      ]
    }],
    // Prevent missing parentheses around multilines JSX
    "react/wrap-multilines": [2, {
      declaration: true,
      assignment: true,
      return: true
    }]
  }
};
