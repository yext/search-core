const path = require('path');

var babelOptions = {
  presets: [['@babel/preset-env', { modules: 'commonjs', targets: {ie: 11}}]],
  plugins: [
    ['@babel/transform-runtime', { corejs: 3, absoluteRuntime: true }]
  ]
};

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  target: ['web', 'es5'],
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
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.legacy.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd'
    }
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000
  }
};