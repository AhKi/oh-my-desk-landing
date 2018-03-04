const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.basic.config');

module.exports = webpackMerge(webpackBaseConfig, {
  cache: true,
  devServer: {
    contentBase: 'build',
    disableHostCheck: true, // do not use production mode
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    port: 3000
  }
})
