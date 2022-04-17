import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import { getFiles } from "./scripts/buildUtils";

const packageJson = require("./package.json");
const extensions = [".js", ".ts", ".jsx", ".tsx"];

export default [
  {
    input: ["./src/index.ts", ...getFiles("./src/Button", extensions)],
    // output: [
    //   {
    //     file: packageJson.main,
    //     format: "cjs",
    //     sourcemap: true,
    //   },
    //   {
    //     file: packageJson.module,
    //     format: "esm",
    //     sourcemap: true,
    //   },
    // ],
    output: {
      dir: "dist",
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      peerDepsExternal(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["src/stories", "src/stories/*", "src/**/.stories.tsx"],
        declaration: true,
        declarationDir: "dist",
      }),
      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),
      terser(),
      image(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
];
