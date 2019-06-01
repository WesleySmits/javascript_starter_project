const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart({
  mode: 'production',
  devtool: 'source-map',
  watch: false,
  module: {
    rules: [
      {
        test:  /\.s?css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("cssnano")()
              ]
            }
          }
        ]
      }
    ]
  }
}, common);
