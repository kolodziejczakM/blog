/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { ListItem } from '~components/ListItem';
import { UnorderedList } from '~components/UnorderedList';
import { Anchor } from '~components/Anchor';
import { fontSizes, zIndexes, breakpoints } from '~shared/theme';

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
    },
    {
        href: 'https://github.com/kolodziejczakM',
        label: 'GitHub'
    }
];

const StyledFooter = styled.footer`
    z-index: ${zIndexes[1]};
`;

const StyledAnchor = styled(Anchor)`
    font-size: ${fontSizes[16]};
`;

const StyledListItem = styled(ListItem)`
    @media (max-width: ${breakpoints[500]}) {
        margin-right: 5px;
    }
`;

const FooterLink = ({ href, label }) => (
    <StyledListItem>
        <StyledAnchor href={href} label={label} />
    </StyledListItem>
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
