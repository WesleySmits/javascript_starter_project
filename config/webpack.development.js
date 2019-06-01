const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge.smart({
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: './app',
    compress: true,
    port: 8080
  },
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
