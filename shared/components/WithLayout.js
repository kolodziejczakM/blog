/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Header } from '~components/Header';
import { Footer } from '~components/Footer';

const StyledGrid = styled.main`
    display: grid;
    grid-template-rows: 80px 5fr 80px;
    height: 100vh;

    #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(4px);
    }

    canvas {
        display: block;
    }
`;

const StyledHeader = styled(Header)`
    padding: 10px 0;
`;

const StyledFooter = styled(Footer)`
    align-self: end;
    padding: 20px 0;
`;

const WithLayout = Page => () => {
    useEffect(() => {
        // has to be here because of its dependency to window object
        import('particles.js').then(() => {
            particlesJS.load('particles-js', '/static/particlesjs-config.json');
        });
    }, []);

    const colors = {
        gray: '#333',
        white: '#FFF',
        orange: '#CC927A',
        lightGreen: '#8F998A',
        green: '#567356',
        brightGreen: '#56AA56'
    };

    return (
        <ThemeProvider theme={colors}>
            <StyledGrid>
                <div id="particles-js" />
                <StyledHeader />
                <Page />
                <StyledFooter />
            </StyledGrid>
        </ThemeProvider>
    );
};

export default WithLayout;
