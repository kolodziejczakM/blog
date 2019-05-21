/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const path = require('path');

module.exports = {
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' }
        };
    },
    webpack(config) {
        config.resolve.alias['~components'] = path.join(__dirname, 'shared/components');
        config.resolve.alias['~utils'] = path.join(__dirname, 'shared/utils');
        config.resolve.alias['~data'] = path.join(__dirname, 'data');

        return config;
    }
};
