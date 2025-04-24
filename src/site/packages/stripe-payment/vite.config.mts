import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";
import tsconfigPaths from 'vite-tsconfig-paths'
import sass from 'sass'

import preserveDirectives from 'rollup-preserve-directives'

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // Specifies the entry point for building the library.
      name: "vite-react-ts-button", // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ["cjs", "es"], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies),'react/jsx-runtime'], // Defines external dependencies for Rollup bundling.
      output: {
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
        },
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts(),tsconfigPaths(),preserveDirectives()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});