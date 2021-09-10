// eslint-disable-next-line
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

// eslint-disable-next-line
module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
