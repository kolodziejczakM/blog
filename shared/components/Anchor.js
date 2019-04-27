/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Link from 'next/link';
import styled from 'styled-components';

export const A = styled.a`
    color: ${({ theme }) => theme.variants[theme.current].blue};
    text-decoration: none;
`;

export const Anchor = ({href, label}) => (
    <Link href={href} passHref>
        <A title={label}>{label}</A>
    </Link>
);
