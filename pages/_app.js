/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import App, { Container } from 'next/app';
import Head from 'next/head';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/vs2015.css';

export default class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let initialProps = {};

        if (Component.getInitialProps) {
            initialProps = await Component.getInitialProps(ctx);
        }

        return { initialProps };
    }

    componentDidMount() {
        hljs.registerLanguage('javascript', javascript);
        document.querySelectorAll('pre code').forEach(block => {
            hljs.highlightBlock(block);
        });

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/static/sw.js').then(
                () => {
                    console.log('Registered');
                },
                err => {
                    console.log(err);
                }
            );
        }
    }

    render() {
        const { Component, pageProps, initialProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Front-end with passion</title>
                </Head>
                <Component {...pageProps} {...initialProps} />
            </Container>
        );
    }
}
