var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname + '/dist/'),
    filename: 'auth.js',
    // library: 'WebAuth',
    libraryTarget: 'umd',
    // libraryExport: 'Auth',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: ['babel-loader'],
      },
    ],
  },
}
