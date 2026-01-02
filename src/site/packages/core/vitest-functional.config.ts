import { defineConfig } from 'vitest/config'
import path from 'path';
import { loadEnv } from 'vite';

export default defineConfig({
  test: {
    include: ['tests/functional/**/*.test.ts'],
    setupFiles: ['vitest-localstorage-mock'],
    env: loadEnv('test', process.cwd())
  },
  resolve: {
    alias: {
      '@jhoose-commerce/core': path.resolve(__dirname, './src')
    }
  }
})