/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { zIndexes, fontSizes } from '~shared/theme';
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
    z-index: ${zIndexes[1]};
    margin-bottom: 15px;
`;

const StyledAnchor = styled(Anchor)`
    font-size: ${fontSizes[16]};
`;

const StyledListItem = styled(ListItem)`
    padding: 5px 0;
`;

const HeaderLink = ({ href, label, isActive }) => (
    <StyledListItem>
        <StyledAnchor
            href={href}
            label={isActive ? `${activeElementPrefix} ${label}` : label}
        />
    </StyledListItem>
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
