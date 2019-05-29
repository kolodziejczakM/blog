/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { useEffect } from 'react';
import styled from 'styled-components';
import { Header } from '~components/Header';
import { Footer } from '~components/Footer';

export const zIndexes = {
    1: 1
};

export const fontSizes = {
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    32: '32px',
    50: '50px'
};

export const breakpoints = {
    500: '500px',
    600: '600px',
    700: '700px',
    1000: '1000px',
    1200: '1200px'
};

export const colors = {
    lighGray: '#666',
    gray: '#333',
    white: '#FFF',
    orange: '#CC927A',
    lightGreen: '#8F998A',
    green: '#567356',
    brightGreen: '#56AA56'
};

const StyledGrid = styled.main`
    display: grid;
    grid-template-rows: auto 5fr auto;
    height: 100vh;

    #particles-js {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(2px);
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

const WithLayout = Page => props => {
    useEffect(() => {
        // has to be here because of its dependency to window object
        import('particles.js').then(() => {
            particlesJS.load('particles-js', '/static/particlesjs-config.json');
        });
    }, []);

    return (
        <StyledGrid>
            <div id="particles-js" />
            <StyledHeader />
            <Page {...props} />
            <StyledFooter />
        </StyledGrid>
    );
};

export default WithLayout;
