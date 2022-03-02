const OFF = 0;
// const WARN = 1;
const ERROR = 2;

module.exports = {
  "root": true,
  "extends": [
    "eslint-config-airbnb",
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaFeatures": {
      "arrowFunctions": true,
      "blockBindings": true,
      "classes": true,
      "destructuring": true,
      "forOf": true,
      "jsx": true,
      "modules": true,
    },
    "ecmaVersion": 8,
    "requireConfigFile": false,
  },
  "settings": {
    // "ecmascript": 6,
  },
  "env": {
    "browser": true,
    "jest": true,
    "node": true,
  },
  "rules": {
    "arrow-body-style": OFF,
    "arrow-parens": OFF,
    "class-methods-use-this": OFF,
    "func-names": OFF,
    "import/extensions": OFF,
    "import/no-extraneous-dependencies": OFF,
    "import/no-unresolved": OFF,
    "import/prefer-default-export": OFF,
    "indent": ERROR,
    "jsx-quotes": [ ERROR, "prefer-single" ],
    "max-len": [ "error", { "code": 120 } ],
    "new-cap": OFF,
    "no-mixed-operators": OFF,
    "no-plusplus": OFF,
    "no-return-assign": OFF,
    "quote-props": OFF,
    "react/forbid-prop-types": OFF,
    "react/jsx-boolean-value": OFF,
    "react/jsx-curly-spacing": [ ERROR, "always" ],
    "react/jsx-filename-extension": OFF,
    "react/prefer-stateless-function": OFF,
    "template-curly-spacing": [ ERROR, "always" ],
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never",
      },
    ],

    // TODO: enable these rules
    "react/destructuring-assignment": OFF,
    "react/jsx-props-no-spreading": OFF,
  },
};
