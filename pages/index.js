/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import WithLayout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import BlogEntities from '~data/BlogEntities.json';

const StyledGrid = styled.section`
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
    font-size: 32px;
    margin: 0;
    position: absolute;
`;

const Index = () => {
    return (
        <section>
            <StyledGrid>
                <StyledHeading>Press ENTER to read selected article</StyledHeading>
                {BlogEntities.map(entity => (
                    <BlogEntity
                        key={entity.id}
                        id={entity.id}
                        title={entity.title}
                        backgroundFile={entity.backgroundFile}
                        href={entity.href}
                    />
                ))}
            </StyledGrid>
        </section>
    );
};

export default WithLayout(Index);
