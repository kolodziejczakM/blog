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

// TODO: Register these breaking points somewhere
const StyledAnchor = styled(Anchor)`
    font-size: 28px;

    @media (max-width: 620px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }

    @media (max-width: 420px) {
        font-size: 14px;
    }
`;

const HeaderLink = ({ href, label }) => (
    <ListItem>
        <StyledAnchor href={href} label={label} />
    </ListItem>
);

// TODO: Register this breaking point somewhere
const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 350px auto;
    grid-gap: 60px;
    background: ${({ theme }) => theme.gray};

    @media (max-width: 1040px) {
        grid-template-columns: auto;
        grid-gap: 20px;
        padding-bottom: 15px;
    }
`;

const Header = () => (
    <StyledHeader>
        <UnorderedList>
            {headerItems.map(item => (
                <HeaderLink key={item.label} href={item.href} label={item.label} />
            ))}
        </UnorderedList>
    </StyledHeader>
);

export default Header;
