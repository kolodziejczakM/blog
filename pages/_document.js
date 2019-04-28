/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import { registerFontFace } from '../shared/utils/fonts';

const GlobalStyles = createGlobalStyle`
    ${registerFontFace('Public Sans', 'PublicSans-Regular', 'normal')}
    ${registerFontFace('Public Sans Bold', 'PublicSans-Bold', 'bold')}

    body {
        font-family: Public Sans;
        font-size: 14px;
        color: #000;
    }
`;

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(
                <>
                    <GlobalStyles />
                    <App {...props} />
                </>
            )
        );

        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>{this.props.styleTags}</Head>
                <body>
                    <GlobalStyles />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
