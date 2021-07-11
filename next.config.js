const path = require('path')

module.exports = {
  i18n: {
    locales: ['en-CA'],
    defaultLocale: 'en-CA'
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}