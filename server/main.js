var express = require('express')
var path = require('path')
var ejs = require('ejs')
var webpack = require('webpack')
var historyApiFallback = require('connect-history-api-fallback')
var webpackConfig = require('../webpack.config')
var compress = require('compression')

var port = process.env.PORT || 3000
var env = process.env.NODE_ENV || 'development'

var app = express()
app.use(historyApiFallback())
app.use(compress())
app.engine('html', ejs.__express)
app.set('view engine', 'html')

if (env === 'development') {
    var entryArr = ['webpack-dev-server/client', 'webpack/hot/only-dev-server']
    webpackConfig.entry.concat(entryArr)
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
    var compiler = webpack(webpackConfig)
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        quiet: false,
        noInfo: true,
        lazy: false,
        stats: { colors: true }
    }))
    app.use(require('webpack-hot-middleware')(compiler))
} else {
    app.use(express.static(path.resolve(__dirname, "../dist")))
}

app.listen(port, '0.0.0.0', function () {
    console.log('app listening on port ' + port)
})