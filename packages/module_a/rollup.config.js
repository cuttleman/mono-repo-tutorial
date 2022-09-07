const { swc } = require("rollup-plugin-swc3");

module.exports = {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  plugins: [
    swc({
      // All options are optional
      include: /\.[jt]sx?$/, // default
      exclude: [/node_modules/, /\.stories.[jt]sx?$/], // default
      tsconfig: "tsconfig.json", // default
      minify: true,
      jsc: {
        transform: {
          react: {
            runtime: "automatic",
          },
        },
      },
    }),
  ],
};
