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
