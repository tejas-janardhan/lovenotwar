const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    'lovenotwar': './src/index.js',
    'lovenotwar.min': './src/index.js',
  },
  devtool: "source-map",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: false,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
  }
}