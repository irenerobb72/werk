
const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './app/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }
  ]},
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/index.html',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './index.html'
  },
  sassLoader: {
     includePaths: [path.resolve(__dirname, "./styles/main.css")]
   }
}
