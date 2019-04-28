/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

// TODO: Add TS types
export const registerFontFace = (fontName, fontFileName, fontWeight) => {
    const basePath = '/static/fonts/PublicSans';

    return `
        @font-face{
            font-family: '${fontName}';
            font-weight: '${fontWeight}';
            src: local('${fontName}'),
                url('${basePath}/${fontFileName}.woff2') format('woff2'),
                url('${basePath}/${fontFileName}.woff') format('woff'),
                url('${basePath}/${fontFileName}.ttf') format('truetype');
        }
    `;
};
