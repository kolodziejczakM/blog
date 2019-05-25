/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const { readFileSync, readdirSync } = require('fs');
const path = require('path');
const parseMD = require('parse-md').default;

exports.getArticles = () => {
    const files = readdirSync(path.join(__dirname, 'posts'));

    return files.reduce((acc, file) => {
        const rawFileContent = readFileSync(
            path.join(__dirname, `posts/${file}`),
            'utf-8'
        );

        const { content, metadata } = parseMD(rawFileContent);
        const basePath = '/articles';

        return {
            ...acc,
            [`${basePath}/${file.split('.')[0]}`]: {
                page: basePath,
                query: {
                    content,
                    metadata
                }
            }
        };
    }, {});
};

exports.registerArticles = () => {
    fs.writeFile(
        path.join(__dirname, 'data/articles.json'),
        JSON.stringify(this.getArticles()),
        err => {
            if (err) console.log(err);
            console.log('Successfully Written to File.');
        }
    );
};
