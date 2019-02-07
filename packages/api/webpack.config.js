const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  mode: 'development', // FIXME: Make this dynamic
  entry: slsw.lib.entries,
  plugins: [new CleanWebpackPlugin(['build'])],
  resolve: {
    extensions: ['*', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            configFile: path.resolve(__dirname, '../..', 'babel.config.js'),
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
};
