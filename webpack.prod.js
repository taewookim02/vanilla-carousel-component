const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/", // This path should be accessible by consumers of the library

    library: {
      name: "VanillaCarouselComponent",
      type: "umd",
    },
    globalObject: "this", // Ensures the library runs correctly in various environments
  },
  externals: {},
});
