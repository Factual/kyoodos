var path = require("path");
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.min.js'
  },
  module: {
    loaders:[
      {
        test: /\.js|jsx$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'react', 'es2015' ]
        }
      }
    ]
  }
};
