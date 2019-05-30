/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

const WithStaticTexts = (staticTexts, DecoratedComponent) => {
    return props => <DecoratedComponent {...props} staticTexts={staticTexts} />;
};

export default WithStaticTexts;
