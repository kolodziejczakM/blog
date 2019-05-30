/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const handler = destinationName => ({
    get: (obj, prop) => {
        if (prop in obj) {
            return obj[prop];
        }

        throw Error(`There is no ${prop} definition in ${destinationName}!`);
    }
});

const _zIndexes = {
    1: 1
};

const _fontSizes = {
    11: '11px',
    12: '12px',
    13: '13px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    32: '32px',
    50: '50px'
};

const _breakpoints = {
    400: '400px',
    500: '500px',
    600: '600px',
    700: '700px',
    1000: '1000px',
    1200: '1200px'
};

const _colors = {
    white: '#FFF',
    black: '#000',
    lightGray: '#666',
    gray: '#333',
    orange: '#CC927A',
    brightGreen: '#56AA56',
    lightGreen: '#8F998A',
    green: '#567356'
};

export const zIndexes = new Proxy(_zIndexes, handler('zIndexes'));
export const fontSizes = new Proxy(_fontSizes, handler('fontSizes'));
export const breakpoints = new Proxy(_breakpoints, handler('breakpoints'));
export const colors = new Proxy(_colors, handler('colors'));

export const registerFontFace = (fontName, fontFileName, fontWeight) => {
    const basePath = '/static/fonts/PublicSans';

    return `
        @font-face{
            font-family: '${fontName}';
            font-weight: '${fontWeight}';
            font-display: 'fallback';
            src: local('${fontName}'),
                url('${basePath}/${fontFileName}.woff2') format('woff2'),
                url('${basePath}/${fontFileName}.woff') format('woff'),
                url('${basePath}/${fontFileName}.ttf') format('truetype');
        }
    `;
};
