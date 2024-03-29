const path = require('path');
const webpack = require('webpack');

const webpackPlugin = new webpack.DefinePlugin({
  'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
});

module.exports = [{
  mode: 'development',
  entry: './src/ts/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'ts-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'window'
  },
  plugins: [webpackPlugin],
}, {
  mode: 'development',
  entry: './src/js/index.js',
  resolve: {
    extensions: [ '.js' ]
  },
  output: {
    filename: 'js-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'window'
  },
  target: ['web', 'es5'],
  plugins: [webpackPlugin],
}];