const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",
  devtool: "eval-cheap-module-source-map", // ⚡️ mais rápido que source-map completo

  entry: path.resolve(__dirname, "src", "main.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
    compress: true, // ⚡️ serve os arquivos com gzip
    client: {
      logging: "warn", // menos poluição no terminal
    },
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve(__dirname, "src", "assets", "scissors.svg"),
      filename: "index.html",
    }),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            cacheDirectory: true, //
          },
        },
      },
    ],
  },
};
