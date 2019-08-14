// module.exports = {
//   publicPath: "/aw/"
// }

const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'aw$': path.resolve('./node_modules/vue/dist/vue.common.js'),
      },
    },
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/aw/'
    : '/'
}
