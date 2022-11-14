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
      files: [
        "**/*.test.ts",
        "**/*.test.tsx"
      ],
      env: {
        jest: true
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
    "react/jsx-indent": ["error", 4],
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "@typescript-eslint/quotes": ["error", "double"],
    "react/jsx-filename-extension":  ["error", { "extensions": [".tsx", ".jsx"] }],
    "guard-for-in": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.test.tsx", "**/*.stories.tsx", "src/setupTests.ts"]}],
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/no-redundant-roles": "off",
    "max-len": "off",
    "no-console": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/destructuring-assignment": "off",
    "react/function-component-definition": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-unused-class-component-methods": "off",
    "react/no-unused-prop-types": "off",
    "react/no-unused-state": "off",
    "react/require-default-props": "off",
    "react/state-in-constructor": "off",
    "@typescript-eslint/no-shadow": "off",
  }
}
