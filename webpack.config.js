var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var path = require('path')
var CleanPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: [
        "./src/index"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                },
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap&-minimize',
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            }
        ],
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js"],
    },
    devtool: "source-map", // enum
    target: "web", // enum
    stats: "errors-only",
    plugins: [
        new CleanPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
            hash: false,
            favicon: path.join(__dirname, 'favicon.ico'),
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: false
            }
        })
    ]
}