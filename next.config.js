/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const { readFile } = require('fs').promises;
const path = require('path');
const parseMD = require('parse-md').default;

const getArticles = async () => {
    const rawFileContent = await readFile(
        'posts/javascript-the-missing-parts.md',
        'utf-8'
    );

    const { content } = parseMD(rawFileContent);

    return {
        '/articles/javascript-the-missing-parts': {
            page: '/articles',
            query: {
                content
            }
        }
    };
};

// '/articles/javascript-the-missing-parts': {
//     page: '/articles',
//     query: {
//         title: 'JavaScript - the missing parts',
//         content: 'lalallalaa'
//     }
// }
module.exports = {
    exportPathMap: async function() {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            ...(await getArticles())
        };
    },
    webpack(config) {
        config.resolve.alias['~components'] = path.join(__dirname, 'shared/components');
        config.resolve.alias['~utils'] = path.join(__dirname, 'shared/utils');
        config.resolve.alias['~posts'] = path.join(__dirname, 'posts');

        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });

        return config;
    }
};
