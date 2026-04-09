import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tseslint.config(
  {
    ignores: [
      "dist",
      "coverage",
      "node_modules",
      "vite.config.ts",
      "build/**",
      "docs-build/**"
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  
  {
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "19.0.0",
      },
      "import/resolver": {
        typescript: {
          project: "./tsconfig.eslint.json",
        },
      },
    },
  },
  
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "import": pluginImport,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/no-unstable-nested-components": ["error", { "allowAsProps": true }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-unused-vars": "off",
      "no-constant-condition": "error",
      "no-unreachable": "error",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.tsx",
            "**/*.stories.tsx",
            "src/setupTests.ts",
            "eslint.config.mts",
            "vite.config.ts",
            ".storybook/**"
          ],
        },
      ],
    },
  },
  
  ...storybook.configs["flat/recommended"],
  
  {
    files: ["**/*.stories.tsx", "**/*.stories.ts"],
    rules: {
      "storybook/no-renderer-packages": "off"
    }
  }
);