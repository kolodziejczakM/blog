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
    font-weight: normal;
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

    h1 {
        font-size: 30px;
        font-weight: normal;
    }

    h2 {
        font-size: 24px;
    }

    th,
    td {
        padding: 10px;
        border: ${({ theme }) => `1px solid ${theme.white}`};
        text-align: left;
    }

    a {
        color: ${({ theme }) => theme.orange};
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }
`;

// TODO: move all staticTexts to decorator
const Articles = ({ router }) => {
    const path = router.asPath.split('/');
    const fileName = path[path.length - 1] || path[path.length - 2];
    const data = require(`~data/${fileName}.json`);

    return (
        <StyledGrid>
            <StyledHeader>
                <StyledHeading>{data.title}</StyledHeading>
                <StyledImg
                    src={`/static/images/webp/${data.backgroundFile}`}
                    alt="article's banner"
                />
            </StyledHeader>
            <StyledSection>
                <ReactMarkdown source={data.content} />
            </StyledSection>
        </StyledGrid>
    );
};

export default WithLayout(withRouter(Articles));
