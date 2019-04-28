/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';

const ImageLogo = styled.img`
    width: 350px;
`;

export const Logo = () => <ImageLogo src="/static/images/logo.png" alt="logo" />;
