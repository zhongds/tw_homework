var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: [
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
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
            }
        ],
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ],
        extensions: [".js"],
        // performance: {
        //     hints: "warning", // enum
        //     maxAssetSize: 200000, // int (in bytes),
        //     maxEntrypointSize: 400000, // int (in bytes)
        //     assetFilter: function (assetFilename) {
        //         return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
        //     }
    },
    devtool: "source-map", // enum
    // context: path.resolve(__dirname, "src"), // string (absolute path!)
    target: "web", // enum
    stats: "errors-only",
    devServer: {
        hot: true,
        contentBase: '/',
        compress: true,
        port: process.env.PORT || 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "index.html"),
            hash: false,
            favicon: path.join(__dirname, 'favicon.ico'),
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
}