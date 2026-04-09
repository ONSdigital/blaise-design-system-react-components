import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import pkg from "./package.json" with { type: "json" };

export default {
    input: "src/index.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
        },
        {
            file: pkg.module,
            format: "es",
            exports: "named",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        nodeResolve(),
        commonjs(),
        json(),
        typescript({
            clean: true,
            tsconfigOverride: {
                exclude: [
                    "**/*.test.tsx", 
                    "**/*.test.ts", 
                    "**/*.stories.tsx", 
                    "**/setupTests.ts",
                    "node_modules",
                    "build"
                ]
            }
        }),
        babel({
            babelHelpers: "bundled",
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            presets: [
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-env", 
                "@babel/preset-typescript"
            ],
            exclude: "node_modules/**"
        })
    ],
};