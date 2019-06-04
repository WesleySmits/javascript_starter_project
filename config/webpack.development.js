const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge.smart({
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: './app',
    compress: true,
    port: 8080
  },
  output: {
    path: path.resolve(__dirname, '../wwwroot/dist'),
    filename: 'bundle.js'
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true
    }),

    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, '../wwwroot/dist'),
      filename: "[name].[chunkhash].css"
    })
  ]
}, common);
