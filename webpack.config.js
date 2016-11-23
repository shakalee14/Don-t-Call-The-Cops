const path = require('path')
const webpack = require('webpack')

const config = {
  target: 'node',
  entry: [
    path.resolve(__dirname, 'main.js'),
    'webpack-hot-middleware/client',
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'jsdom': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/\/iconv-loader$/),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
}

module.exports = config
