const path = require('path');

module.exports = {
  entry: {
    app: './app/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, '../wwwroot/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|test)/,
        loader: "babel-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
}
