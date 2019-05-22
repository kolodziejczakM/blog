/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { ListItem } from '~components/ListItem';
import { UnorderedList } from '~components/UnorderedList';
import { Anchor } from '~components/Anchor';

// TODO: Create footer with that
// {
//     href: 'https://twitter.com/kolodziejczakMn',
//     label: 'Twitter'
// },
// {
//     href: 'https://www.facebook.com/kolodziejczakMn',
//     label: 'Facebook'
// },
// {
//     href: 'https://www.linkedin.com/in/marcin-ko%C5%82odziejczak-3349aa10a/',
//     label: 'Linkedin'
// }

const headerItems = [
    {
        href: '/',
        label: 'Blog'
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

const Header = () => (
    <header>
        <UnorderedList>
            {headerItems.map(item => (
                <HeaderLink key={item.label} href={item.href} label={item.label} />
            ))}
        </UnorderedList>
    </header>
);

export default Header;
