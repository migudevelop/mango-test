const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html'
})

module.exports = (_env, { mode }) => {
  const fileNameWithHash =
    mode === 'production' ? '[name].[contenthash:8]' : '[name].[fullhash:8]'

  return {
    devtool: 'inline-source-map',
    entry: {
      bundle: path.resolve('./src/index.jsx')
    },
    output: {
      path: path.resolve('build'),
      filename: `static/js/${fileNameWithHash}.chunk.js`,
      libraryTarget: 'umd',
      publicPath: '/',
      clean: true
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src')
      },
      extensions: ['.js', '.jsx']
    },
    plugins: [htmlWebpackPlugin]
  }
}
