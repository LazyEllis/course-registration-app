'use strict';

const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    common: './src/js/common.js',
    index: './src/js/index.js',
    dashboard: './src/js/dashboard.js',
    'course-selection': './src/js/course-selection.js',
    'selected-courses': './src/js/selected-courses.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['common', 'index'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: './src/dashboard.html',
      chunks: ['common', 'dashboard'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'course-selection.html',
      template: './src/course-selection.html',
      chunks: ['common', 'course-selection'],
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      filename: 'selected-courses.html',
      template: './src/selected-courses.html',
      chunks: ['common', 'selected-courses'],
      inject: 'body',
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
