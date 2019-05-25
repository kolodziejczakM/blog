/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const fs = require('fs');
const path = require('path');
const parseMD = require('parse-md').default;

const getArticles = () => {
    const files = fs.readdirSync(path.join(__dirname, 'posts'));

    return files.reduce((acc, file) => {
        const rawFileContent = fs.readFileSync(
            path.join(__dirname, `posts/${file}`),
            'utf-8'
        );

        const { content, metadata } = parseMD(rawFileContent);

        return {
            ...acc,
            [`/articles/${file.split('.')[0]}`]: {
                page: '/articles',
                query: {
                    content,
                    metadata
                }
            }
        };
    }, {});
};

const articles = getArticles();

module.exports = {
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            ...articles
        };
    },
    webpack(config) {
        config.resolve.alias['~components'] = path.join(__dirname, 'shared/components');
        config.resolve.alias['~utils'] = path.join(__dirname, 'shared/utils');
        config.resolve.alias['~data'] = path.join(__dirname, 'data');

        return config;
    }
};
