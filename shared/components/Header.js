/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import Link from 'next/link';
import { ListItem } from './ListItem';
import { UnorderedList } from './UnorderedList';
import { Anchor } from './Anchor';
import { Logo } from './Logo';

const headerItems = [
    {
        href: '/',
        label: 'Blog'
    },
    {
        href: '/about',
        label: 'About'
    },
    {
        href: 'https://twitter.com/kolodziejczakMn',
        label: 'Twitter'
    },
    {
        href: 'https://www.facebook.com/kolodziejczakMn',
        label: 'Facebook'
    },
    {
        href: 'https://www.linkedin.com/in/marcin-ko%C5%82odziejczak-3349aa10a/',
        label: 'Linkedin'
    }
];

const HeaderLink = ({ href, label }) => (
    <ListItem>
        <Anchor href={href} label={label} />
    </ListItem>
);

const StyledHeader = styled.header`
    display: flex;
    background: ${({ theme }) => theme.variants[theme.current].gray};
`;

const Header = () => (
    <StyledHeader>
        <Logo />
        <UnorderedList>
            {headerItems.map(item => (
                <HeaderLink key={item.label} href={item.href} label={item.label} />
            ))}
        </UnorderedList>
    </StyledHeader>
);

export default Header;
