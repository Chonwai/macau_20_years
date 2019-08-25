module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'cn',
            fallbackLocale: 'cn',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ?
        '/macau20years/' : '/'
}