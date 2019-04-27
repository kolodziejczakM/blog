/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';

export const UnorderedList = styled.ul`
    display: flex;
    background: ${({ theme }) => theme.variants[theme.current].gray};
    list-style-type: none;
    margin: 0;
    padding: 0;
`;
