const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  entry: {
    main: path.resolve(__dirname, '../src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'app.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vue Playground',
      template: path.resolve(__dirname, '../public/index.html'),
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
};
