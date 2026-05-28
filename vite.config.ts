import { resolve } from "path";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

import rawPkg from "./package.json" with { type: "json" };

import type { LibraryFormats } from "vite";

type PackageJson = {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

const pkg: PackageJson = rawPkg;

export default defineConfig(() => {
  const isStorybook =
    process.env.STORYBOOK === "1" ||
    process.env.STORYBOOK === "true" ||
    process.env.npm_lifecycle_event?.includes("storybook") ||
    process.argv.some((arg) => arg.includes("storybook"));

  const plugins = [
    react(),
    ...(isStorybook
      ? []
      : [
          dts({
            bundleTypes: true,
            tsconfigPath: "./tsconfig.build.json",
          }),
        ]),
  ];

  return {
    plugins,
    build: {
      outDir: "dist",
      sourcemap: true,
      lib: {
        entry: resolve(import.meta.dirname, "src/index.ts"),
        formats: ["es"] as LibraryFormats[],
        fileName: "index",
      },
      rollupOptions: {
        external: [
          ...Object.keys(pkg.peerDependencies || {}),
          ...Object.keys(pkg.dependencies || {}),
          "react/jsx-runtime",
        ],
      },
    },
    test: {
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
      globals: true,
      clearMocks: true,
      coverage: {
        provider: "v8" as const,
        reporter: ["text", "json", "html"],
        include: ["src/**/*.{ts,tsx}"],
        exclude: [
          "src/**/*.mock.ts",
          "src/**/*.test.*",
          "src/**/*.stories.*",
          "src/**/*.types.ts",
          "src/index.ts",
          "src/setupTests.ts",
        ],
      },
    },
  };
});
