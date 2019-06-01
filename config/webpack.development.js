const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart({
  mode: "development",
  devtool: "source-map",
  watch: true,
  module: {
  }
}, common);
