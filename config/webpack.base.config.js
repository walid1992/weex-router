/**
 * @Author   : walid
 * @Data     : 2017-04-20  13:47
 * @Describe : base
 */

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../package.json')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(config.version)
    }),
    new ExtractTextPlugin('index.css')
  ]
}