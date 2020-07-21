const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
  new CopyWebpackPlugin([{ from: './public' }]),
  new CleanWebpackPlugin(['dist']),
];

module.exports = {
  devtool: 'hidden-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8576,
    disableHostCheck: true,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
