const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
      '__DEV__': process.env.NODE_ENV === 'development',
      '__PROD__': process.env.NODE_ENV === 'production'
    })
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'app/assets'),
      constants: path.resolve(__dirname, 'app/constants'),
      components: path.resolve(__dirname, 'app/components'),
      routes: path.resolve(__dirname, 'app/routes'),
      utils: path.resolve(__dirname, 'app/utils')
    },
    extensions: ['.js', '.jsx']
  },
};
