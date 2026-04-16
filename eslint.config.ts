import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
// ADDED: Prettier integration
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

const __dirname = import.meta.dirname;

export default tseslint.config(
    {
        // UPDATED: Centralized ignore list (works for both ESLint and Prettier plugin)
        ignores: [
            "dist",
            "coverage",
            "node_modules",
            "vite.config.ts",
            "build/**",
            "docs-build/**",
            "yarn.lock",
            "package.json",
            ".storybook/public/**",
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
            import: pluginImport,
            // ADDED: Prettier plugin
            prettier: pluginPrettier,
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,
            // ADDED: Prettier rule enforcement
            "prettier/prettier": [
                "error",
                {
                    singleQuote: false,
                    semi: true,
                    tabWidth: 4,
                    trailingComma: "all",
                    printWidth: 100,
                    bracketSpacing: true,
                    endOfLine: "auto",
                },
            ],
            "react/react-in-jsx-scope": "off",
            "react/require-default-props": "off",
            "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "no-unused-vars": "off",
            "no-constant-condition": "error",
            "no-unreachable": "error",
            "import/no-extraneous-dependencies": [
                "error",
                {
                    devDependencies: [
                        "**/*.test.ts",
                        "**/*.test.tsx",
                        "**/*.stories.tsx",
                        "src/setupTests.ts",
                        "eslint.config.ts",
                        "vite.config.ts",
                        ".storybook/**",
                    ],
                },
            ],
        },
    },

    ...storybook.configs["flat/recommended"],

    {
        files: ["**/*.stories.tsx"],
        rules: {
            "storybook/no-renderer-packages": "off",
        },
    },
    // ADDED: Must be last to disable conflicting rules
    configPrettier,
);
