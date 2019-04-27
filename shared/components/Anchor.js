/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';

export const Anchor = styled.a`
    color: ${({ theme }) => theme.variants[theme.current].blue};
    text-decoration: none;
`;
