import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: '_worker.ts',
      formats: ['es'],
      fileName: () => '_worker.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: '_worker.js',
        dir: "www"
      },
    },
  },
  root: 'www',
});