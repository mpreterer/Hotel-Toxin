"use strict";

var path = require('path');

var HTMLWebpackPlugin = require('html-webpack-plugin');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extentions: ['js', 'json']
  },
  watchOptions: {
    ignored: /node_modules/
  },
  mode: 'development'
};