/**
 * @Author   : walid
 * @Data     : 2017-04-20  13:47
 * @Describe : dev
 */

let merge = require('webpack-merge')
let base = require('./webpack.base.config')

module.exports = merge(base, {
  devtool: 'eval-source-map'
})