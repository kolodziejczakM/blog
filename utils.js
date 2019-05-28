/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const { readFileSync, readdirSync } = require('fs');
const { readdir } = require('fs').promises;
const path = require('path');
const parseMD = require('parse-md').default;
const webp = require('webp-converter');
const sizeOf = require('image-size');
const sharp = require('sharp');

const getArticles = () => {
    const postsPath = 'static/posts';
    const files = readdirSync(path.join(__dirname, postsPath));

    return files.reduce((acc, file) => {
        const rawFileContent = readFileSync(
            path.join(__dirname, `${postsPath}/${file}`),
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

const getScenarios = () => {
    const scenariosPath = 'static/scenarios';
    const files = readdirSync(path.join(__dirname, scenariosPath));

    return files.reduce((acc, fileName, id) => {
        const scenarioHrefName = fileName.split('.')[0];
        const scenarioTitle = scenarioHrefName.split('-').join(' ');

        return [
            ...acc,
            {
                id,
                title: scenarioTitle,
                href: `/${scenariosPath}/${fileName}`,
                banner: `${scenarioHrefName}.webp`
            }
        ];
    }, []);
};

exports.registerArticles = () => {
    fs.writeFile(
        path.join(__dirname, 'data/articles.json'),
        JSON.stringify(getArticles()),
        err => {
            if (err) console.log(err);
            console.log('Successfully generated: data/articles.json.');
        }
    );
};

exports.registerScenarios = () => {
    fs.writeFile(
        path.join(__dirname, 'data/scenarios.json'),
        JSON.stringify(getScenarios()),
        err => {
            if (err) console.log(err);
            console.log('Successfully generated: data/scenarios.json.');
        }
    );
};

exports.convertBannersToWebP = async () => {
    const banners = await readdir(path.join(__dirname, 'static/images'));

    banners.forEach(banner => {
        if (!banner.includes('.')) return;

        const [bannerName] = banner.split('.');
        const basePath = 'static/images';
        sizeOf(`${basePath}/${banner}`, async (_, dimensions) => {
            console.log('Resizing start...');
            const factor = dimensions.width / dimensions.height;

            await sharp(`${basePath}/${banner}`)
                .resize({
                    width: 600,
                    height: 600 / factor
                })
                .toFile(`${basePath}/compressed/${banner}`);

            console.log('Resizing done.');
            console.log('Conversion start...');

            webp.cwebp(
                `${basePath}/compressed/${banner}`,
                `${basePath}/webp/${bannerName}.webp`,
                '-q 70',
                (status, error) => {
                    console.log(status, error);
                }
            );

            console.log('Conversion done.');
        });
    });
};
