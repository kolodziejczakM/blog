/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '~components/Header';

const useTheme = () => {
    const defaultTheme = 'daylight';
    const [_, setCurrentThemeVariant] = useState(defaultTheme);

    const theme = {
        current: 'daylight',
        variants: {
            daylight: {
                blue: '#38b6ff',
                red: '#ff5757',
                white: '#fff',
                gray: '#666'
            },
            night: {}
        },
        computations: {
            setCurrentThemeVariant
        }
    };

    return theme;
};

const WithLayout = Page => () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <>
                <Header />
                <Page />
            </>
        </ThemeProvider>
    );
};

export default WithLayout;
