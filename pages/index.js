/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import WithLayout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import BlogEntities from '~data/BlogEntities.json';

const StyledIndex = styled.section`
    display: grid;
    grid-gap: 10px;
    background-color: #2196f3;
    grid-template:
        'MainArticle MainArticle Article1 Article2'
        'MainArticle MainArticle Article3 Article4';
`;

const Index = () => {
    return (
        <StyledIndex>
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
