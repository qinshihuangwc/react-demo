const webpack = require('webpack');
const WebpackDevServer = require('webpack-dv-server');
const config = require('./webpack.config');

const compiler = webpack(config);

let port  = 9000;

config.entry.unshift(
    `webpack-dev-server/clinet?http://localhost:${port}`,
    'webpack/hot/dev-server'
);

new WebpackDevServer(compiler, {
    hot : true,
    contentBase:'./src/',
    publicPath : '/assets/'
}).listen(port);