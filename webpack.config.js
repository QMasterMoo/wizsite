/* 
 * Alex Harding <alex.harding@whale-net.net>
 * setup files cloned from school project
 */
const path = require('path');

module.exports = {
  entry: {
    app: './wizsite/js/main.jsx',
  },
  output: {
    path: path.join(__dirname, '/wizsite/static/js/'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        // Test for js or jsx files
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          // Convert ES6 syntax to ES5 for browser compatibility
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
