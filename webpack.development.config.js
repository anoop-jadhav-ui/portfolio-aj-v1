const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
    publicPath: "/"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    port: "9000",
    writeToDisk: true
  },
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        type: "asset/inline"
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource"
      },
      {
        test: /\.(css)$/,
        use: [MiniCSSExtractPlugin.loader, {
          loader: "css-loader",
          options: {
            url: false
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/env"],
            plugins: []
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      favicon: './public/favicon.ico',
    }),
    new MiniCSSExtractPlugin({
      filename: "styles.[contenthash].css"
    }),
    new webpack.EnvironmentPlugin({
      REACT_APP_FIREBASE_KEY: JSON.stringify(process.env.REACT_APP_FIREBASE_KEY),
      REACT_APP_AUTH_DOMAIN: JSON.stringify(process.env.REACT_APP_AUTH_DOMAIN),
      REACT_APP_DATABASE_URL: JSON.stringify(process.env.REACT_APP_DATABASE_URL),
      REACT_APP_PROJECT_ID: JSON.stringify(process.env.REACT_APP_PROJECT_ID),
      REACT_APP_STORAGE_BUCKET: JSON.stringify(process.env.REACT_APP_STORAGE_BUCKET),
      REACT_APP_SENDER_ID: JSON.stringify(process.env.REACT_APP_SENDER_ID),
      REACT_APP_APP_ID: JSON.stringify(process.env.REACT_APP_APP_ID),
      REACT_APP_MEASUREMENT_ID: JSON.stringify(process.env.REACT_APP_MEASUREMENT_ID),
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
      React: "react",
    })
  ]
};
