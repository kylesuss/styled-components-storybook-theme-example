const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const env = process.env.NODE_ENV || 'development'
const isProd = env === 'production'
const isDev = env === 'development'
const srcDir = path.resolve(__dirname, 'src')

const config = {
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: srcDir,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: [
          srcDir,
          path.resolve(__dirname, 'node_modules/normalize.css')
        ],
        use: 'raw-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    modules: ['src', 'node_modules'],
    symlinks: false
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      hash: isProd
    })
  ]
}

if (isDev) {
  config.devtool = 'eval-source-map'
  config.devServer = { historyApiFallback: true }
}

module.exports = config
