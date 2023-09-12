/**
 * \@rollup/plugin-typescript had issue with "export type":
 * [!] RollupError: Unexpected token (Note that you need plugins to import files that are not JavaScript)
 * Switched over to a fork rollup-plugin-typescript2 resolved the issue.
 */
import typescript from "rollup-plugin-typescript2";
import json from "@rollup/plugin-json";
import { defineConfig } from "rollup";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      dir: "./dist/esm",
      /**
       * use mjs extension so NodeJS will recognize the bundle as ES modules
       * https://nodejs.org/api/packages.html#determining-module-system
       */
      entryFileNames: "[name].mjs",
      format: "esm",
      /** preserve original module files instead of compressing all to one file */
      preserveModules: true,
      sourcemap: true,
      /**
       * set to "auto" to follow TypeScript's esModuleInterop behavior to ensures compatibility
       * of default, namespace, and dynamic imports from external deps (e.g. react-textarea-autosize).
       */
      interop: "auto",
    },
    {
      dir: "./dist/commonjs",
      format: "cjs",
      preserveModules: true,
      sourcemap: true,
      interop: "auto",
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
    }),
    json(),
  ],
});