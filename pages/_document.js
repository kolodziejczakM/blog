/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { Fragment } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 14px;
  }
  body {
    font-family: "Merriweather", serif;
    font-size: 14px;
  }
`;

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props =>
            sheet.collectStyles(
                <Fragment>
                    <GlobalStyles />
                    <App {...props} />
                </Fragment>
            )
        );

        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head>
                    {this.props.styleTags}
                </Head>
                <body>
                    <GlobalStyles />
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
