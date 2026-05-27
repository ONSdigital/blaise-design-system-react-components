import js from "@eslint/js";
import eslintReact from "@eslint-react/eslint-plugin";
import configPrettier from "eslint-config-prettier";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import pluginImportX from "eslint-plugin-import-x";
import pluginJsonc from "eslint-plugin-jsonc";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import * as jsoncParser from "jsonc-eslint-parser";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["coverage/**", "dist/**", "storybook-static/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  eslintReact.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
    },
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({ project: "./tsconfig.eslint.json" }),
      ],
    },
  },

  {
    files: ["*.ts"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: {
      "import-x": pluginImportX,
    },
    rules: {
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: "import", next: "*" },
        { blankLine: "any", prev: "import", next: "import" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
        { blankLine: "always", prev: "*", next: ["class", "function", "export"] },
        { blankLine: "always", prev: ["block-like", "multiline-block-like"], next: "*" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
        },
      ],
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "no-unused-vars": "off",
      "no-constant-condition": "error",
      "no-unreachable": "error",
      "import-x/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import-x/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "*.config.ts",
            "src/setupTests.ts",
            "src/**/*.mock.*",
            "src/**/*.test.*",
            "src/**/*.stories.*",
          ],
        },
      ],
    },
  },

  ...storybook.configs["flat/recommended"],
  {
    files: ["src/**/*.stories.tsx"],
  },

  ...pluginJsonc.configs["flat/recommended-with-jsonc"],

  {
    files: ["**/*.json", "**/*.jsonc"],
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      "jsonc/sort-keys": [
        "error",
        { pathPattern: "^$", order: { type: "asc" } },
        { pathPattern: "^compilerOptions$", order: { type: "asc" } },
      ],
    },
  },

  {
    files: ["package.json"],
    rules: {
      "jsonc/sort-keys": [
        "error",
        {
          pathPattern: "^$",
          order: [
            "name",
            "version",
            "private",
            "description",
            "author",
            "license",
            "repository",
            "engines",
            "type",
            "types",
            "exports",
            "files",
            "sideEffects",
            "scripts",
            "peerDependencies",
            "dependencies",
            "devDependencies",
            "packageManager",
          ],
        },
        {
          pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$|^scripts$",
          order: { type: "asc" },
        },
      ],
    },
  },

  configPrettier,
);
