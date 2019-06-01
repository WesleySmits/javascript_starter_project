const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart({
  mode: "development",
  devtool: "source-map",
  watch: true,
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("postcss-browser-reporter")(),
                require("postcss-reporter")()
              ]
            }
          }
        ]
      }
    ]
  }
}, common);
