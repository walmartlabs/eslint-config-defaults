"use strict";

module.exports = {
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": false
  },
  "rules": {
    // Prevent missing displayName in a React component definition
    "react/display-name": 0,
    // Forbid certain propTypes
    "react/forbid-prop-types": 0,
    // Enforce boolean attributes notation in JSX
    "react/jsx-boolean-value": 0,
    // Validate closing bracket location in JSX
    "react/jsx-closing-bracket-location": 0,
    // Enforce or disallow spaces inside of curly braces in JSX attributes
    "react/jsx-curly-spacing": 0,
    // Enforce event handler naming conventions in JSX
    "react/jsx-handler-names": 0,
    // Validate props indentation in JSX
    "react/jsx-indent-props": 0,
    // Validate JSX has key prop when in array or iterator
    "react/jsx-key": 0,
    // Limit maximum of props on a single line in JSX
    "react/jsx-max-props-per-line": 0,
    // Prevent usage of .bind() and arrow functions in JSX props
    "react/jsx-no-bind": 0,
    // Prevent duplicate props in JSX
    "react/jsx-no-duplicate-props": 0,
    // Prevent usage of isMounted
    "react/no-is-mounted": 0,
    // Prevent usage of unwrapped JSX strings
    "react/jsx-no-literals": 0,
    // Disallow undeclared variables in JSX
    "react/jsx-no-undef": 0,
    // Enforce PascalCase for user-defined JSX components
    "react/jsx-pascal-case": 0,
    // Enforce quote style for JSX attributes
    "react/jsx-quotes": 0,
    // Enforce propTypes declarations alphabetical sorting
    "react/jsx-sort-prop-types": 0,
    // Enforce props alphabetical sorting
    "react/jsx-sort-props": 0,
    // Prevent React to be incorrectly marked as unused
    "react/jsx-uses-react": 0,
    // Prevent variables used in JSX to be incorrectly marked as unused
    "react/jsx-uses-vars": 0,
    // Prevent usage of dangerous JSX properties
    "react/no-danger": 0,
    // Prevent usage of deprecated methods
    "react/no-deprecated": 0,
    // Prevent usage of setState in componentDidMount
    "react/no-did-mount-set-state": 0,
    // Prevent usage of setState in componentDidUpdate
    "react/no-did-update-set-state": 0,
    // Prevent direct mutation of this.state
    "react/no-direct-mutation-state": 0,
    // Prevent multiple component definition per file
    "react/no-multi-comp": 0,
    // Prevent usage of setState
    "react/no-set-state": 0,
    // Prevent using string references in ref attribute.
    "react/no-string-refs": 0,
    // Prevent usage of unknown DOM property
    "react/no-unknown-property": 0,
    // Enforce ES5 or ES6 class for React Components
    "react/prefer-es6-class": 0,
    // Prevent missing props validation in a React component definition
    "react/prop-types": 0,
    // Prevent missing React when using JSX
    "react/react-in-jsx-scope": 0,
    // Restrict file extensions that may be required
    "react/require-extension": 0,
    // Prevent extra closing tags for components without children
    "react/self-closing-comp": 0,
    // Enforce component methods order
    "react/sort-comp": 0,
    // Prevent missing parentheses around multilines JSX
    "react/wrap-multilines": 0
  }
};
