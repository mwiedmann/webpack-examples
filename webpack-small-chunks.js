const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: './src/main/index.tsx',
  // devtool: 'inline-source-map',
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