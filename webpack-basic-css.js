const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * This shows webpacks ability to import css files using css-loader and inject into the dom with style-loader.
 */
const config = {
  entry: './src/main-css/index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/i,
        sideEffects: true,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
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