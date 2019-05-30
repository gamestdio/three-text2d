const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: 'three-text2d.js',
    path: path.join(__dirname, "dist"),
    library: 'THREE_Text2D',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.webpack.js', '.ts', '.js']
  },

  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
    ]
  },

  externals: {
    three: "THREE"
  }

}
