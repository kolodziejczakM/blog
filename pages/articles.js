/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { breakpoints, colors, zIndexes, fontSizes } from '~shared/theme';
import WithLayout from '~components/WithLayout';
import { withRouter } from 'next/router';

const StyledGrid = styled.section`
    margin: 0 auto;
    display: grid;
    width: 800px;
    z-index: ${zIndexes[1]};
    gap: 40px 80px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;

    @media (max-width: ${breakpoints[1000]}) {
        width: 80%;
    }

    @media (max-width: ${breakpoints[600]}) {
        width: 100%;
    }
`;

const StyledHeader = styled.header`
    display: grid;
    gap: 15px;
    justify-items: center;
`;

const StyledHeading = styled.h1`
    font-weight: normal;
    color: ${colors.white};
    font-size: ${fontSizes[50]};
    margin: 0;

    @media (max-width: ${breakpoints[1000]}) {
        font-size: ${fontSizes[32]};
    }

    @media (max-width: ${breakpoints[700]}) {
        font-size: ${fontSizes[24]};
    }

    @media (max-width: ${breakpoints[500]}) {
        font-size: ${fontSizes[20]};
    }
`;

const StyledImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 300px;

    @media (max-width: ${breakpoints[1000]}) {
        height: 200px;
    }

    @media (max-width: ${breakpoints[600]}) {
        height: 100px;
    }
`;

const StyledSection = styled.section`
    background: ${colors.gray};
    font-size: ${fontSizes[20]};
    color: ${colors.white};
    padding: 10px;

    h1 {
        margin-top: 0;
        font-size: ${fontSizes[24]};
        font-weight: normal;
    }

    h2 {
        font-size: ${fontSizes[18]};
    }

    p {
        margin-top: 0;
    }

    th,
    td {
        padding: 10px;
        border: 1px solid ${colors.white};
        text-align: left;
    }

    a {
        color: ${colors.orange};
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }

    @media (max-width: ${breakpoints[1200]}) {
        font-size: ${fontSizes[16]};

        p {
            margin: 0 0 4px 0;
        }

        h1 {
            font-size: ${fontSizes[20]};
        }

        h2 {
            font-size: ${fontSizes[18]};
        }
    }

    @media (max-width: ${breakpoints[600]}) {
        padding: 0;
        font-size: ${fontSizes[14]};

        h1 {
            font-size: ${fontSizes[18]};
        }

        h2 {
            font-size: ${fontSizes[16]};
        }

        code {
            font-size: ${fontSizes[12]};
        }
    }

    @media (max-width: ${breakpoints[400]}) {
        padding: 0;
        font-size: ${fontSizes[13]};

        code {
            font-size: ${fontSizes[11]};
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
