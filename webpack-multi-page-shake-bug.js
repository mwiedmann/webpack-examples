const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * This demonstrates multiple entries grouped together. This allows webpack to share bundles (which is great)
 * but it does introduce a tree shaking problem where tree shaking doesn't work correctly
 * so you end up with unneeded code in some bundles.
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
  ]
}

module.exports = config