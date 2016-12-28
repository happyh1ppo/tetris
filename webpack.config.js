const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: {
    tetris: './src/app.js'
  },

  devtool: 'source-map',

  output: {
    path: './build',
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, './src')
      ],
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  },

  watch: true,
  watchOptions: {
    poll: true,
    aggregateTimeout: 100
  }

};
