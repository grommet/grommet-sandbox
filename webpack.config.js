const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const useAlias = process.env.USE_ALIAS;

const plugins = [
  new CopyWebpackPlugin([{ from: './public' }]),
  new CleanWebpackPlugin(['dist']),
];

let alias;

if (useAlias) {
  console.log('Using alias to local grommet.');
  alias = {
    'grommet': path.resolve(__dirname, '../grommet/src/js'),
    'grommet-icons': path.resolve(__dirname, '../grommet-icons/src/js'),
  };
}

module.exports = {
  devtool: 'hidden-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8576,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    alias,
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
