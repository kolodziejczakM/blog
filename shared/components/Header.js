/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { ListItem } from '~components/ListItem';
import { UnorderedList } from '~components/UnorderedList';
import { Anchor } from '~components/Anchor';
import { withRouter } from 'next/router';

const activeElementPrefix = '>';

const items = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/about',
        label: 'About'
    }
];

const StyledHeader = styled.header`
    z-index: 1;
`;

const StyledAnchor = styled(Anchor)`
    font-size: 16px;
`;

const HeaderLink = ({ href, label, isActive }) => (
    <ListItem>
        <StyledAnchor
            href={href}
            label={isActive ? `${activeElementPrefix} ${label}` : label}
        />
    </ListItem>
);

export const Header = withRouter(({ className, router }) => (
    <StyledHeader className={className}>
        <UnorderedList>
            {items.map(item => (
                <HeaderLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    isActive={router.pathname === item.href}
                />
            ))}
        </UnorderedList>
    </StyledHeader>
));
