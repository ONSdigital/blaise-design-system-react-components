import storybook from "eslint-plugin-storybook";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

const __dirname = import.meta.dirname;

export default tseslint.config(
    {
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
            prettier: pluginPrettier,
        },
        rules: {
            ...pluginReactHooks.configs.recommended.rules,

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
                    tabWidth: 4,
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
    configPrettier,
);
