import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      insertTypesEntry: true,
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx', '**/setupTests.ts']
    }),
  ],
  build: {
    outDir: 'build',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'BlaiseDesignSystem',
      fileName: (format) => `index.${format === 'es' ? 'es.js' : 'js'}`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies || {}),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          formik: 'Formik',
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