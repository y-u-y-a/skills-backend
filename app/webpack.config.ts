import path from 'path'
import nodeExternals from 'webpack-node-externals'

export default {
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
