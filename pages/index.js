/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import WithLayout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import BlogEntities from '~data/BlogEntities.json';

// TODO: swap with generated list
const articles = {
    lala: {
        query: {
            metadata: {
                title: 'xd',
                backgroundFile: 'xx.jpg',
                href: '/lala'
            }
        }
    }
};

const StyledGrid = styled.section`
    z-index: 1;
    display: grid;
    position: relative;
    gap: 0 80px;
    grid-template:
        'MainArticle MainArticle Article1 Article2'
        'MainArticle MainArticle Article3 Article4';
    grid-template-rows: repeat(2, 1fr);
`;

const StyledHeading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 50px;
    margin: 0;
    position: absolute;
`;

const Index = () => (
    <section>
        <StyledGrid>
            <StyledHeading>Articles</StyledHeading>
            {Object.values(articles).map(({ query: { metadata } }) => (
                <BlogEntity
                    key={metadata.title}
                    id={metadata.title}
                    title={metadata.title}
                    backgroundFile={metadata.backgroundFile}
                    href={`/articles/${metadata.href}`}
                />
            ))}
        </StyledGrid>
    </section>
);

export default WithLayout(Index);
