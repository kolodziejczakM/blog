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

const writeContentToFileAsJSON = (outputFile, content) => {
    fs.writeFile(path.join(__dirname, outputFile), JSON.stringify(content), err => {
        if (err) console.log(err);
        console.log(`Successfully written to: ${outputFile}`);
    });
};

const generateArticles = () => {
    const postsPath = 'static/posts';
    const files = readdirSync(path.join(__dirname, postsPath));

    return files.reduce((acc, file) => {
        const fileName = file.split('.')[0];
        const rawMarkdownFileContent = readFileSync(
            path.join(__dirname, `${postsPath}/${file}`),
            'utf-8'
        );

        const { content, metadata } = parseMD(rawMarkdownFileContent);
        const basePath = '/articles';
        const data = {
            ...metadata,
            onMedium: Boolean(metadata.onMedium),
            href: metadata.href || fileName
        };

        writeContentToFileAsJSON(`data/${fileName}.json`, {
            ...data,
            content
        });

        return {
            ...acc,
            [`${basePath}/${fileName}`]: {
                page: basePath,
                query: { metadata: data }
            }
        };
    }, {});
};

const generateScenarios = () => {
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

const resizeBannerAndConvertToWebP = (banner, basePath) => async (_, dimensions) => {
    const [bannerName] = banner.split('.');
    const outputWidth = 600;
    const ratio = dimensions.width / dimensions.height;

    await sharp(`${basePath}/${banner}`)
        .resize({
            width: outputWidth,
            height: outputWidth / ratio
        })
        .toFile(`${basePath}/compressed/${banner}`);

    webp.cwebp(
        `${basePath}/compressed/${banner}`,
        `${basePath}/webp/${bannerName}.webp`,
        '-q 70',
        (status, error) => {
            console.log('WebP compression: ', status, error);
        }
    );
};

exports.registerArticles = () => {
    writeContentToFileAsJSON('data/articles.json', generateArticles());
};

exports.registerScenarios = () => {
    writeContentToFileAsJSON('data/scenarios.json', generateScenarios());
};

exports.convertBannersToWebP = async () => {
    const basePath = 'static/images';
    const banners = await readdir(path.join(__dirname, basePath));

    banners.forEach(banner => {
        if (!banner.includes('.')) return;

        sizeOf(`${basePath}/${banner}`, resizeBannerAndConvertToWebP(banner, basePath));
    });
};
