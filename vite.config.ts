import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json" with { type: "json" };

const EXCLUDE_PATTERNS = [
  "src/mocks/**",
  "**/*.test.ts",
  "**/*.test.tsx",
  "**/*.stories.tsx",
  "**/setupTests.ts",
];

export default defineConfig({
  plugins: [
    react(),
    dts({
      bundleTypes: true,
      exclude: EXCLUDE_PATTERNS,
    }),
  ],
  build: {
    outDir: "dist",
    sourcemap: true,
    lib: {
      entry: resolve(import.meta.dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "es.js" : "js"}`,
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
    typecheck: {
      tsconfig: "./tsconfig.test.json",
    },
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: EXCLUDE_PATTERNS,
    },
  },
});
