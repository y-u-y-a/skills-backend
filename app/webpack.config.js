/* eslint-disable */
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  //
  mode: 'production',
  target: 'node',
  //
  entry: path.resolve(__dirname, 'src/app.ts'),
  //
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // node_modulesの依存エラーを無視
  externals: [nodeExternals()],
  //
  module: {
    rules: [
      // typescript
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
      },
      // graphql
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
}
