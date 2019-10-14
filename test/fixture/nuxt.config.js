const {resolve} = require('path')

module.exports = {
    rootDir: resolve(__dirname, '../..'),
    buildDir: resolve(__dirname, '.nuxt'),
    srcDir: __dirname,
    render: {
        resourceHints: false
    },
    head: {
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ]
    },

    modules: [
        {handler: require('../../')}
    ],

    NuxtDeviceIs: {
        breakpoints: {
            mobile: 720,
            tablet: 1024,
            laptop: 1440,
            desktop: 999999
        }
    }
};