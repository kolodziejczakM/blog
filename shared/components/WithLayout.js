/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled, { ThemeProvider } from 'styled-components';
import { Header } from '~components/Header';
import { Footer } from '~components/Footer';

const StyledGrid = styled.section`
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
    height: 100vh;
`;

const StyledHeader = styled(Header)`
    padding: 10px 0;
`;

const StyledFooter = styled(Footer)`
    align-self: end;
    padding: 20px 0;
`;

const WithLayout = Page => () => {
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
                <StyledHeader />
                <Page />
                <StyledFooter />
            </StyledGrid>
        </ThemeProvider>
    );
};

export default WithLayout;
