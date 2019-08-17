const path = require('path')

module.exports = {
  configureWebpack: {
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/rd/'
    : '/'
}
