const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname + "/src/client/index.ts"),
  output: {
    path: path.resolve(__dirname + "/public/js"),
    filename: "index.min.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
