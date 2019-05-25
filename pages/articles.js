/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import WithLayout from '~components/WithLayout';
import { withRouter } from 'next/router';

const StyledGrid = styled.section`
    margin: 0 auto;
    display: grid;
    width: 80%;
    z-index: 1;
    gap: 40px 80px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
`;

const StyledHeader = styled.header`
    display: grid;
    gap: 15px;
    justify-items: center;
`;

const StyledHeading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 50px;
    margin: 0;
`;

const StyledImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 350px;
`;

const StyledSection = styled.section`
    font-size: 20px;
    color: ${({ theme }) => theme.white};
`;

// TODO: move all staticTexts to decorator
const Articles = withRouter(({ router }) => {
    // console.log('router: ', router);
    return (
        <StyledGrid>
            <StyledHeader>
                <StyledHeading>TITLE</StyledHeading>
                <StyledImg src="/static/images/universe-man.jpg" alt="article's banner" />
            </StyledHeader>
            <StyledSection>
                <ReactMarkdown source={router.query.content} />
            </StyledSection>
        </StyledGrid>
    );
});

export default WithLayout(Articles);
