const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: ""
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
        test: /\.(ttf)$/,
        type: "asset/resource"
      },
      {
        test: /\.(png|jpg)$/,
        type: "asset/resource"
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-proposal-class-properties"
              ]
            }
          },
          {
            loader: "eslint-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*")
      ]
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
      React: "react"
    }),
    new webpack.EnvironmentPlugin({
      REACT_APP_FIREBASE_KEY: "AIzaSyBcfmHiwjgUjgya5oma3cZRqtlRqDPpmSY",
      REACT_APP_AUTH_DOMAIN: "dev-anoops-portfolio.firebaseapp.com",
      REACT_APP_DATABASE_URL:
        "https://dev-anoops-portfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
      REACT_APP_PROJECT_ID: "dev-anoops-portfolio",
      REACT_APP_STORAGE_BUCKET: "dev-anoops-portfolio.appspot.com",
      REACT_APP_SENDER_ID: "879863340049",
      REACT_APP_APP_ID: "1:879863340049:web:bbfe831cd53e1329fc65b0",
      REACT_APP_MEASUREMENT_ID: "G-YL01N06BFG"
    })
  ]
};
