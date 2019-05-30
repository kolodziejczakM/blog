/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const path = require('path');
const withCSS = require('@zeit/next-css');
const articles = require('./data/articles.json');

module.exports = withCSS({
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            ...articles
        };
    },
    webpack(config) {
        config.resolve.alias['~shared'] = path.join(__dirname, 'shared');
        config.resolve.alias['~components'] = path.join(__dirname, 'shared/components');
        config.resolve.alias['~data'] = path.join(__dirname, 'data');

        return config;
    }
});
