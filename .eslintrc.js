module.exports = {
  ignorePatterns: [
    // TODO: Remove later
    "**/*.d.ts",
    "rollup.config.js",
    "jest.config.js",
    "coverage/*",
    "build/*",
    ".eslintrc.js",
  ],
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  overrides: [
    {
      "files": [
        "**/*.test.ts",
        "**/*.test.tsx"
      ],
      "env": {
        "jest": true
      },
      parserOptions: {
        project: 'tsconfig.test.json',
      }
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "@typescript-eslint/indent": ["error", 4],
    "@typescript-eslint/quotes": ["error", "double"],
    "react/jsx-filename-extension":  ["error", { "extensions": [".tsx", ".jsx"] }],
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "arrow-body-style": "off",
    "arrow-parens": "off",
    "eqeqeq": "off",
    "guard-for-in": "off",
    "import/no-cycle": "off",
    "import/no-duplicates": "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-redundant-roles": "off",
    "jsx-quotes": "off",
    "max-len": "off",
    "no-console": "off",
    "no-else-return": "off",
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "off",
    "no-unneeded-ternary": "off",
    "object-shorthand": "off",
    "prefer-const": "off",
    "prefer-template": "off",
    "quote-props": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/button-has-type": "off",
    "react/destructuring-assignment": "off",
    "react/function-component-definition": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-closing-tag-location": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-indent": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-access-state-in-setstate": "off",
    "react/no-array-index-key": "off",
    "react/no-unused-class-component-methods": "off",
    "react/no-unused-prop-types": "off",
    "react/no-unused-state": "off",
    "react/require-default-props": "off",
    "react/self-closing-comp": "off",
    "react/state-in-constructor": "off",
    "@typescript-eslint/brace-style": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    "import/no-useless-path-segments": "off",
    "prefer-destructuring": "off",
  }
}
