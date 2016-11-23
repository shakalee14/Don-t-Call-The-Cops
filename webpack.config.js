const path = require('path')
const webpack = require('webpack')

const config = {
  target: 'node',
  entry: [
    path.resolve(__dirname, './browser/main.js'),
    'webpack-hot-middleware/client',
    path.resolve(__dirname, './browser/polyfill.js')
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
        loader: ['babel-loader'],
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react' ]
        }
      },
      {
        include: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'jsdom': 'window',
     React: 'react',
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
