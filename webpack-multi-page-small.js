const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * This demonstrates small bundles with multipe entry points.
 */
const config = {
  entry: {
    main: './src/main/index.tsx',
    admin: './src/admin/index.tsx',
    reporting: './src/reporting/index.tsx'
  },
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
    // Need to add the .tsx, .ts extensions for ts-loader
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: 'index.html',
      minify: false,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: 'admin.html',
      minify: false,
      chunks: ['admin']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      filename: 'reporting.html',
      minify: false,
      chunks: ['reporting']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxSize: 1024
    }
  }
}

module.exports = config