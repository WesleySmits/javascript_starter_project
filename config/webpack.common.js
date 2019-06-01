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
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: [
                require('postcss-import')(),
                require('postcss-at-rules-variables')(),
                require('postcss-each')(),
                require('postcss-nested')(),
                require('postcss-preset-env')({
                  stage: 0,
                  autoprefixer: { grid: false },
                  browsers: ['last 2 versions', 'IE 10', '> 5% in NL']
                }),
              ]
            }
          }
        ]
      }
    ]
  }
}
