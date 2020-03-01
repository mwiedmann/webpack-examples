const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * This demonstrates multiple entry points. Each will generate its own html file and bundles.
 */
module.exports = ['main', 'admin', 'reporting'].map(name =>
  ({
    entry: {
      [name]: `./src/${name}/index.tsx`
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
        filename: `${name === 'main' ? 'index' : name}.html`,
        minify: false,
        chunks: [name]
      })
    ]
  })
)