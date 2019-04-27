/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import Link from 'next/link';
import { ListItem } from './ListItem';
import { UnorderedList } from './UnorderedList';
import { Anchor } from './Anchor';

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
    <Link href={href}>
        <ListItem>
            <Anchor title={label}>{label}</Anchor>
        </ListItem>
    </Link>
);

const Header = ({ theme }) => (
    <UnorderedList>
        {headerItems.map(item => (
            <HeaderLink key={item.label} href={item.href} label={item.label} />
        ))}
    </UnorderedList>
);

export default Header;

