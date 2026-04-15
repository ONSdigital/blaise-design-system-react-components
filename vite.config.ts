import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import pkg from './package.json' with { type: 'json' };

const currentDir = import.meta.dirname;

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      exclude: [
        '**/*.test.tsx',
        '**/*.test.ts',
        '**/*.stories.tsx',
        '**/setupTests.ts'
      ],
    }),
  ],
  build: {
    outDir: 'build',
    sourcemap: true,
    lib: {
      entry: resolve(currentDir, 'src/index.ts'),
      name: 'BlaiseDesignSystem',
      fileName: (format) => `index.${format === 'es' ? 'es.js' : 'js'}`,
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {}), 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          formik: 'Formik',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
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
