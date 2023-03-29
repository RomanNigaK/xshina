const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.tsx",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 7070,
    hot: true,
    historyApiFallback: true,
  },
  output: {
    assetModuleFilename: "assets/[name][ext]",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".css", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
      {
        test: /\.(svg)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "icons/[hash][ext]",
        },
      },
    ],
  },
};
