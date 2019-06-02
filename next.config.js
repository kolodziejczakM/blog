/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const path = require('path');
const withCSS = require('@zeit/next-css');
const articles = require('./data/articles.json');
const withManifest = require('next-manifest');
const withOffline = require('next-offline');

const baseConfig = {
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
};

const manifest = {
    name: 'Kolodziejczak.dev',
    short_name: 'Kolodziejczak.dev',
    start_url: '/',
    display: 'standalone',
    background_color: '#cccccc',
    theme_color: '#cccccc',
    orientation: 'portrait-primary',
    icons: [
        {
            src: '/static/icons/application/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
        },
        {
            src: '/static/icons/application/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
        },
        {
            src: '/static/icons/application/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
        },
        {
            src: '/static/icons/application/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
        },
        {
            src: '/static/icons/application/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
        },
        {
            src: '/static/icons/application/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
        },
        {
            src: '/static/icons/application/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
        },
        {
            src: '/static/icons/application/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
        }
    ]
};

const workboxOpts = {
    globPatterns: [
        'static/fonts/PublicSans/*',
        'static/icons/**/*',
        'static/images/webp/*',
        'static/scenarios/*',
        'static/particlesjs-config.json'
    ],
    globDirectory: '.',
    runtimeCaching: [
        {
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'offlineCache',
                expiration: {
                    maxEntries: 200
                }
            }
        }
    ]
};

module.exports = withOffline({
    ...withManifest({
        ...withCSS(baseConfig),
        manifest
    }),
    workboxOpts,
    generateInDevMode: true
});
