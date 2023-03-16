const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

const port = 3000

module.exports = (env, cofig) =>
  merge(common(env, cofig), {
    mode: 'development',
    devServer: {
      port,
      open: true,
      historyApiFallback: true
    }
  })
