/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import WithLayout from '~components/WithLayout';
import { Anchor } from '~components/Anchor';

const StyledGrid = styled.section`
    z-index: 1;
    width: 80%;
    margin: 0 auto;
    display: grid;
    gap: 40px 80px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
`;

const StyledHeader = styled.header`
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 15px;
    justify-items: center;
`;

const StyledHeading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 50px;
    margin: 0;
`;

const StyledImg = styled.img`
    border: 1px solid ${({ theme }) => theme.lightGreen};
    object-fit: cover;
    width: 250px;
    height: 250px;
    border-radius: 50%;
`;

const StyledSection = styled.section`
    margin: 0 auto;
`;

const StyledParagraph = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.white};
`;

const StyledAnchor = styled(Anchor)`
    font-size: 20px;
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
