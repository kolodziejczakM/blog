/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Link from 'next/link';
import styled from 'styled-components';
import { colors } from '~components/WithLayout';

const A = styled.a`
    color: ${() => colors.white};
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }

    :focus {
        outline: 4px solid ${() => colors.brightGreen};
    }
`;

export const Anchor = ({ className, href, label }) => (
    <div className={className}>
        <Link href={href} passHref>
            <A title={label}>{label}</A>
        </Link>
    </div>
);
