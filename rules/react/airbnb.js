"use strict";

module.exports = {
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": false
  }
  "rules": {
    // Prevent missing displayName in a React component definition
    "display-name": 0,
    // Enforce boolean attributes notation in JSX
    "jsx-boolean-value": 2,
    // Disallow undeclared variables in JSX
    "jsx-no-undef": 2,
    // Enforce quote style for JSX attributes
    "jsx-quotes": [2, "double"],
    // Enforce propTypes declarations alphabetical sorting
    "jsx-sort-prop-types": 0,
    // Enforce props alphabetical sorting
    "jsx-sort-props": 0,
    // Prevent React to be incorrectly marked as unused
    "jsx-uses-react": 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    "jsx-uses-vars": 2,
    // Prevent usage of setState in componentDidMount
    "no-did-mount-set-state": [2, "allow-in-func"],
    // Prevent usage of setState in componentDidUpdate
    "no-did-update-set-state": 2,
    // Prevent multiple component definition per file
    "no-multi-comp": 2,
    // Prevent usage of unknown DOM property
    "no-unknown-property": 2,
    // Prevent missing props validation in a React component definition
    "prop-types": 2,
    // Prevent missing React when using JSX
    "react-in-jsx-scope": 2,
    // Restrict file extensions that may be required
    "require-extension": 0,
    // Prevent extra closing tags for components without children
    "self-closing-comp": 2,
    // Enforce component methods order
    "sort-comp": [2, {
      "order": [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "getDefaultProps",
        "getInitialState",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "/^on.+$/",
        "/^get.+$/",
        "/^render.+$/",
        "render"
      ]
    }],
    // Prevent missing parentheses around multilines JSX
    "wrap-multilines": 2
  }
}
