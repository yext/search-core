const path = require('path');

var babelOptions = {
  presets: [
    ['@babel/preset-env', { modules: 'commonjs', targets: {ie: 11} }]
  ],
  plugins: [
    ['@babel/transform-runtime', { corejs: 3, absoluteRuntime: true }]
  ]
};

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.legacy.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'umd'
    }
  },
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
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 400000
  },
  devtool: 'source-map',
  target: ['web', 'es5'],
  optimization: {
    minimize: false
  },
};