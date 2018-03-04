const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.basic.config');

module.exports = webpackMerge(webpackBaseConfig, {});
