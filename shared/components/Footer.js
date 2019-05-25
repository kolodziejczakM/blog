/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { ListItem } from '~components/ListItem';
import { UnorderedList } from '~components/UnorderedList';
import { Anchor } from '~components/Anchor';

const items = [
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

const StyledFooter = styled.footer`
    z-index: 1;
`;

const StyledAnchor = styled(Anchor)`
    font-size: 16px;
`;

const FooterLink = ({ href, label }) => (
    <ListItem>
        <StyledAnchor href={href} label={label} />
    </ListItem>
);

export const Footer = ({ className }) => (
    <StyledFooter className={className}>
        <UnorderedList>
            {items.map(item => (
                <FooterLink key={item.label} href={item.href} label={item.label} />
            ))}
        </UnorderedList>
    </StyledFooter>
);
