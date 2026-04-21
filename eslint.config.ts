import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import storybook from "eslint-plugin-storybook";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["coverage/**", "dist/**", "docs-build/**", "node_modules/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.node },
    },
    settings: {
      "import/resolver": {
        typescript: { project: "./tsconfig.eslint.json" },
      },
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: pluginImport,
      prettier: pluginPrettier,
    },
    rules: {
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0, maxBOF: 0 }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "always", prev: "*", next: ["class", "function", "export"] },
      ],
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          semi: true,
          tabWidth: 2,
          useTabs: false,
          trailingComma: "all",
          printWidth: 100,
          bracketSpacing: true,
          jsxSingleQuote: false,
          arrowParens: "always",
          singleAttributePerLine: true,
          jsxBracketSameLine: false,
          endOfLine: "lf",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-unused-vars": "off",
      "no-constant-condition": "error",
      "no-unreachable": "error",
    },
  },

  {
    files: ["src/**/*.{ts,tsx}"],
    settings: { react: { version: "19.0.0" } },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "src/**/*.test.ts",
            "src/**/*.test.tsx",
            "src/**/*.stories.tsx",
            "src/setupTests.ts",
          ],
        },
      ],
    },
  },

  ...storybook.configs["flat/recommended"],
  {
    files: ["src/**/*.stories.tsx"],
    rules: { "storybook/no-renderer-packages": "off" },
  },

  configPrettier,
);
