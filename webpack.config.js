const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageMetadata = require('./package.json')
const libraryName = packageMetadata.name
const libraryVersion = packageMetadata.version

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: path.join(__dirname, '/buildDynamic/index.js'),
  output: {
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: {
  },
  plugins: [
    new webpack.DefinePlugin({
      'global.__VERSION__': JSON.stringify(libraryVersion),
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./index.html"
    })
  ],
}
