const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart({
  mode: 'production',
  devtool: 'source-map',
  watch: false,
  module: {
  }
}, common);
