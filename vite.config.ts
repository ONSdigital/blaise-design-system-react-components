import { resolve } from "path";

import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [
    react(),
    dts({
      bundleTypes: true,
      tsconfigPath: "./tsconfig.build.json",
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es"],
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
      provider: "v8",
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
});
