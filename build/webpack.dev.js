const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
});
