/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import { registerFontFace } from '~utils/fonts';
import { breakpoints, colors, fontSizes } from '~shared/theme';

const GlobalStyles = createGlobalStyle`
    ${registerFontFace('Public Sans', 'PublicSans-Regular', 'normal')}
    ${registerFontFace('Public Sans Bold', 'PublicSans-Bold', 'bold')}

    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100vh;
    }

    body {
        margin: 0;
        padding: 0 40px;
        font-family: Public Sans;
        font-size: ${fontSizes[14]};
        background: ${colors.gray};
        color: ${colors.black};

        @media (max-width: ${breakpoints[600]}) {
            padding: 0 20px;
        }

        @media (max-width: ${breakpoints[400]}) {
            padding: 0 8px;
        }
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
