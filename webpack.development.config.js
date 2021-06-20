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
        publicPath: ''
    },
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        index: 'index.html',
        port: '9000',
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
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties",
                        ]
                    }
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new webpack.ProvidePlugin({
            "process": 'process/browser',
            "React": "react",
        }),
        new webpack.EnvironmentPlugin({
            REACT_APP_FIREBASE_KEY: "AIzaSyDlYTEBXzYszVvCfT4hlIQscdH1364WZb0",
            REACT_APP_AUTH_DOMAIN: "anoops-portfolio.firebaseapp.com",
            REACT_APP_DATABASE_URL: "https://anoops-portfolio.firebaseio.com",
            REACT_APP_PROJECT_ID: "anoops-portfolio",
            REACT_APP_STORAGE_BUCKET: "anoops-portfolio.appspot.com",
            REACT_APP_SENDER_ID: "1032524113902",
            REACT_APP_APP_ID: "1:1032524113902:web:00c039b90bce61f30250ff"
        })

    ]
}