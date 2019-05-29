/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import WithLayout, {
    colors,
    fontSizes,
    breakpoints,
    zIndexes
} from '~components/WithLayout';
import { Anchor } from '~components/Anchor';

const StyledGrid = styled.section`
    z-index: ${() => zIndexes[1]};
    width: 80%;
    margin: 0 auto;
    display: grid;
    gap: 40px 80px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;

    @media (max-width: ${() => breakpoints[1000]}) {
        gap: 20px 40px;
    }

    @media (max-width: ${() => breakpoints[500]}) {
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
    color: ${() => colors.white};
    font-size: ${() => fontSizes[50]};
    margin: 0 0 22px 0;

    @media (max-width: ${() => breakpoints[1000]}) {
        font-size: ${() => fontSizes[32]};
    }

    @media (max-width: 500px) {
        font-size: ${() => fontSizes[24]};
    }
`;

const StyledImg = styled.img`
    border: 1px solid ${() => colors.lightGreen};
    object-fit: cover;
    width: 250px;
    height: 250px;
    border-radius: 50%;

    @media (max-width: ${() => breakpoints[500]}) {
        width: 200px;
        height: 200px;
    }
`;

const StyledSection = styled.section`
    margin: 0 auto;
`;

const StyledParagraph = styled.p`
    font-size: ${() => fontSizes[20]};
    color: ${() => colors.white};

    @media (max-width: ${() => breakpoints[1200]}) {
        font-size: ${() => fontSizes[16]};
    }

    @media (max-width: ${() => breakpoints[500]}) {
        font-size: ${() => fontSizes[14]};
    }
`;

const StyledAnchor = styled(Anchor)`
    font-size: ${() => fontSizes[20]};
    margin-bottom: 3px;

    @media (max-width: ${() => breakpoints[1200]}) {
        font-size: ${() => fontSizes[16]};
    }

    @media (max-width: ${() => breakpoints[500]}) {
        font-size: ${() => fontSizes[14]};
    }
`;

// TODO: move all staticTexts to decorator
// TODO: path to images should be a const declared somewhere and imported here
class About extends React.Component {
    render() {
        return (
            <StyledGrid>
                <StyledHeader>
                    <StyledImg src="/static/images/webp/me.webp" alt="author" />
                    <StyledHeading>Marcin Kołodziejczak</StyledHeading>
                </StyledHeader>
                <StyledSection>
                    <StyledParagraph>
                        I'm Senior Front-end Developer currently living in Poznań. In my
                        free time I participate in open source projects, like these:
                    </StyledParagraph>
                    <StyledAnchor
                        href="https://github.com/kolodziejczakM/password-backpack"
                        label="https://github.com/kolodziejczakM/password-backpack"
                    />
                    <StyledAnchor
                        href="https://github.com/kolodziejczakM/functional-snippets"
                        label="https://github.com/kolodziejczakM/functional-snippets"
                    />
                    <StyledParagraph>
                        In the past I used to direct short movies so feel free to ask
                        about anything related :)
                    </StyledParagraph>
                </StyledSection>
            </StyledGrid>
        );
    }
}

export default WithLayout(About);
