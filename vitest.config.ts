import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    globals: true,
    clearMocks: true,
    server: {
      deps: {
        inline: ['react-loader-spinner'],
      },
    },
  },
});