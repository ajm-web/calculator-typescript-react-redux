const path = require('path');
const webpack = require('webpack');
const webpackLoadPlugins = require('webpack-load-plugins');
const plugins = webpackLoadPlugins();

module.exports = {
  entry: {
    bundle: './src/js/index.tsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  devtool: "source-map",
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', 'scss']
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      { test: /\.html?$/,
        exclude: /node_modules/,
        loader: "file?name=[path][name].[ext]"
      }
    ]
  },
  plugins: [
    new plugins.copy([
      { from: './src/index.html' }
    ])
  ]
};
