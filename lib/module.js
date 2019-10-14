const path = require('path');

function NuxtDeviceIs(moduleOptions) {
    let options = {
        ...moduleOptions,
        ...this.options.NuxtDeviceIs,
        mixin_path: path.resolve(__dirname, 'module.mixin.js'),
        helpers_path: path.resolve(__dirname, 'module.helpers.js')
    };

    this.addPlugin({
        src: path.resolve(__dirname, 'module.plugin.js'),
        options: options
    });
}

module.exports = NuxtDeviceIs;
module.exports.meta = require('../package.json');