/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import WithLayout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import BlogEntities from '~data/BlogEntities.json';

const StyledIndex = styled.section`
    display: grid;
    padding: 40px;
    gap: 40px;
    background-color: #2196f3;
    grid-template:
        'Header Header . .'
        'MainArticle MainArticle Article1 Article2'
        'MainArticle MainArticle Article3 Article4';
    grid-template-rows: 1fr 4fr 4fr;
`;

const StyledHeading = styled.h1`
    grid-area: Header;
    color: ${({ theme }) => theme.white};
`;

const Index = () => {
    return (
        <StyledIndex>
            <StyledHeading>Press ENTER to read newest article</StyledHeading>
            {BlogEntities.map(entity => (
                <BlogEntity
                    key={entity.id}
                    id={entity.id}
                    title={entity.title}
                    backgroundFile={entity.backgroundFile}
                    onClick={() => {}}
                />
            ))}
        </StyledIndex>
    );
};

export default WithLayout(Index);
