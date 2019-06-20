import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const NODE_ENV = process.env.NODE_ENV || "development ";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/index.js",
    format: "esm"
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      configFile: "./.babelrc"
    }),
    resolve(),
    terser()
  ],
  external: id => /^react/.test(id)
};