const path = require("path");
const { babelLoader } = require("./loaders");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(process.cwd(), "dist"),
    library: "@liorheber/retable",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [babelLoader]
  }
};
