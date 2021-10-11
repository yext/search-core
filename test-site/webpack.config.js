const path = require('path');

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
}];