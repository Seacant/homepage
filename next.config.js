const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  experimental: {optimizeCss: true}
})
