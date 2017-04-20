/**
 * @Author   : walid
 * @Data     : 2017-04-20  13:47
 * @Describe : prod
 */

let webpack = require('webpack')
let merge = require('webpack-merge')
let base = require('./webpack.base.config')

module.exports = merge(base, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      mangle: false
    })
  ]
})