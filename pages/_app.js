/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import App, { Container } from 'next/app';
import Head from 'next/head';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Front-end with passion</title>
                </Head>
                <Component {...pageProps} />
            </Container>
        );
    }
}
