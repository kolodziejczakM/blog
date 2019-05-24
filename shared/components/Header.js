/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { ListItem } from '~components/ListItem';
import { UnorderedList } from '~components/UnorderedList';
import { Anchor } from '~components/Anchor';

const items = [
    {
        href: '/',
        label: '> Blog'
    },
    {
        href: '/about',
        label: 'About'
    }
];

const StyledAnchor = styled(Anchor)`
    font-size: 16px;
`;

const HeaderLink = ({ href, label }) => (
    <ListItem>
        <StyledAnchor href={href} label={label} />
    </ListItem>
);

export const Header = ({ className }) => (
    <header className={className}>
        <UnorderedList>
            {items.map(item => (
                <HeaderLink key={item.label} href={item.href} label={item.label} />
            ))}
        </UnorderedList>
    </header>
);
