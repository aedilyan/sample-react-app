module.exports = {
  "plugins": [
    "react",
    "react-hooks"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "rules": {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/display-name": 0,
    "react/prop-types": 0,
    "no-console": 0
  }
};

