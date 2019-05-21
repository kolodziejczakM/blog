/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { ThemeProvider } from 'styled-components';
import Header from '~components/Header';

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
            <>
                <Header />
                <Page />
            </>
        </ThemeProvider>
    );
};

export default WithLayout;
