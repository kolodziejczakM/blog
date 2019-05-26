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
        const pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    componentDidMount() {
        import('particles.js').then(() => {
            // has to be here because of its dependency to window object
            particlesJS.load('particles-js', '/static/particlesjs-config.json');
        });

        hljs.registerLanguage('javascript', javascript);
        document.querySelectorAll('pre code').forEach(block => {
            hljs.highlightBlock(block);
        });
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
