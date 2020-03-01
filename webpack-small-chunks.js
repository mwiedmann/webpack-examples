const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Same as the basic config with with a small max chuck size to demonstrate code splitting.
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
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      minify: false
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 100
    }
  }
}

module.exports = config