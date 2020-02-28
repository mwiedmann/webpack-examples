const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/main/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // Need to add the .tsx, .ts extensions for ts-loader
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: false
    })
  ]
}

module.exports = config