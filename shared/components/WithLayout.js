/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Header from './Header';

// TODO: Use there ThemeProvider and define Layout with styled-components

const WithLayout = Page => {
    return () => (
        <div>
            <Header />
            <Page />
        </div>
    );
};

export default WithLayout;
