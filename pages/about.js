/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { breakpoints, colors, zIndexes, fontSizes } from '~shared/theme';
import WithLayout from '~components/WithLayout';
import WithStaticTexts from '~components/WithStaticTexts';
import { Anchor } from '~components/Anchor';

const StyledGrid = styled.section`
    z-index: ${zIndexes[1]};
    width: 80%;
    margin: 0 auto;
    display: grid;
    gap: 40px 80px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;

    @media (max-width: ${breakpoints[1000]}) {
        gap: 20px 40px;
    }

    @media (max-width: ${breakpoints[500]}) {
        width: 100%;
    }
`;

const StyledHeader = styled.header`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 15px;
    justify-items: center;
`;

const StyledHeading = styled.h1`
    color: ${colors.white};
    font-size: ${fontSizes[50]};
    margin: 0 0 22px 0;

    @media (max-width: ${breakpoints[1000]}) {
        font-size: ${fontSizes[32]};
    }

    @media (max-width: 500px) {
        font-size: ${fontSizes[24]};
    }
`;

const StyledImg = styled.img`
    border: 1px solid ${colors.lightGreen};
    object-fit: cover;
    width: 250px;
    height: 250px;
    border-radius: 50%;

    @media (max-width: ${breakpoints[500]}) {
        width: 200px;
        height: 200px;
    }
`;

const StyledSection = styled.section`
    margin: 0 auto;
`;

const StyledParagraph = styled.p`
    font-size: ${fontSizes[20]};
    color: ${colors.white};

    @media (max-width: ${breakpoints[1200]}) {
        font-size: ${fontSizes[16]};
    }

    @media (max-width: ${breakpoints[500]}) {
        font-size: ${fontSizes[14]};
    }
`;

const StyledAnchor = styled(Anchor)`
    font-size: ${fontSizes[20]};
    margin-bottom: 3px;

    @media (max-width: ${breakpoints[1200]}) {
        font-size: ${fontSizes[16]};
    }

    @media (max-width: ${breakpoints[500]}) {
        font-size: ${fontSizes[14]};
    }
`;

// TODO: path to images should be a const declared somewhere and imported here
const About = WithStaticTexts(
    {
        authorName: 'Marcin Kołodziejczak',
        now: `I'm Senior Front-end Developer currently living in Poznań. In my free time
    I participate in open source projects, like these:`,
        past: `In the past I used to direct short movies so feel free to ask about
    anything related :)`,
        passwordBackpackLabel: 'Password backpack',
        passwordBackpackHref: 'https://github.com/kolodziejczakM/password-backpack',
        functionalSnippetsLabel: 'Functional Snippets',
        functionalSnippetsHref: 'https://github.com/kolodziejczakM/functional-snippets',
        bannerAlt: 'author',
        imagePath: '/static/images/webp/me.webp'
    },
    ({ staticTexts }) => (
        <StyledGrid>
            <StyledHeader>
                <StyledImg src={staticTexts.imagePath} alt={staticTexts.bannerAlt} />
                <StyledHeading>{staticTexts.authorName}</StyledHeading>
            </StyledHeader>
            <StyledSection>
                <StyledParagraph>{staticTexts.now}</StyledParagraph>
                <StyledAnchor
                    href={staticTexts.passwordBackpackHref}
                    label={staticTexts.passwordBackpackLabel}
                />
                <StyledAnchor
                    href={staticTexts.functionalSnippetsHref}
                    label={staticTexts.functionalSnippetsLabel}
                />
                <StyledParagraph>{staticTexts.past}</StyledParagraph>
            </StyledSection>
        </StyledGrid>
    )
);

export default WithLayout(About);
