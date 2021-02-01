const path = require('path');

var babelOptions = {
  presets: [['@babel/preset-env', { debug: true, useBuiltIns: false, targets: {ie: 11} }]],
  plugins: [
    ['@babel/transform-runtime', { corejs: 3, absoluteRuntime: true }]
  ]
};

module.exports = [{
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules\/(?!cross-fetch).*/,
        use: [
          { loader: 'babel-loader', options: babelOptions },
        ]
      },
      {
        test: /\.ts$/,
        exclude: '/node_modules/',
        use: [
          { loader: 'ts-loader' , options: { configFile: 'tsconfig.esm.json' }}
        ]
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    environment: {
      arrowFunction: false
    },
    library: 'answersCore',
    libraryTarget: 'umd'
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
}];