const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackMd5Hash = require('webpack-md5-hash');

module.exports = merge.smart({
  mode: 'production',
  devtool: 'source-map',
  watch: false,
  entry: {
    vendor: path.resolve(__dirname, '../app/vendor'),
    app: path.resolve(__dirname, '../app/js/app'),
  },
  output: {
    path: path.resolve(__dirname, '../wwwroot/dist'),
    filename: '[name].[chunkhash].js'
  },
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
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true,
          compress: {},
          warnings: false,
        }
      }),
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
    }),

    new webpackMd5Hash(),

    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, '../wwwroot/dist'),
      filename: "[name].[chunkhash].css"
    })
  ]
}, common);
