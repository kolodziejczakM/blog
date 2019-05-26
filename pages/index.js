/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import WithLayout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import articles from '~data/articles.json'; // TODO: do not import articles content here!!!

const StyledGrid = styled.section`
    z-index: 1;
    display: grid;
    position: relative;
    gap: 40px 80px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;

    @media (max-width: 1200px) {
        gap: 20px 40px;
        grid-template-columns: repeat(auto-fill, 1fr);
    }
`;

const StyledHeading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 50px;
    margin: 25px 0;

    @media (max-width: 1000px) {
        font-size: 32px;
    }
`;

const Index = () => (
    <section>
        <StyledHeading>Articles</StyledHeading>
        <StyledGrid>
            {Object.values(articles).map(({ query: { metadata } }, id) => (
                <BlogEntity
                    key={metadata.title}
                    id={id}
                    title={metadata.title}
                    backgroundFile={metadata.backgroundFile}
                    href={`/articles/${metadata.href}`}
                />
            ))}
        </StyledGrid>
    </section>
);

export default WithLayout(Index);
