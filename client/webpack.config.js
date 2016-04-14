var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'client.min.js'
  },
  module: {
    loaders:[
      {
        test: /\.js|jsx$/,
        loaders: [ 'babel?sourceMap' ]
      }
    ]
  }
};
