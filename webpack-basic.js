const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * A basic webpack config with 1 entry point, Typescript, and HtmlWebpackPlugin to generate the index.html file.
 */
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