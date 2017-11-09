var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
});
