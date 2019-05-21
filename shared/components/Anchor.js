/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Link from 'next/link';
import styled from 'styled-components';

const A = styled.a`
    color: ${({ theme }) => theme.white};
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
`;

export const Anchor = ({ className, href, label }) => (
    <div className={className}>
        <Link href={href} passHref>
            <A title={label}>{label}</A>
        </Link>
    </div>
);
