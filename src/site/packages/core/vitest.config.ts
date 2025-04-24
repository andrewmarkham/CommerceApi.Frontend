import { defineConfig } from 'vitest/config'
import path from 'path';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'],
  },
  resolve: {
    alias: {
      '@jhoose-commerce/core': path.resolve(__dirname, './src')
    }
  }
})