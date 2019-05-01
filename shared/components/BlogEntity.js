/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { ListItem } from '~components/ListItem';
import { UnorderedList } from '~components/UnorderedList';

const StyledBlogEntity = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
    color: #666;
    font-weight: bold;
    background: #38b6ff;
    clip-path: polygon(30px 0%, 100% 0%, 100% 100%, 30px 100%, 0 50%);
    padding: 10px 40px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    align-items: center;
`;

const StyledBlogTag = styled(ListItem)`
    padding: 10px;
    border-radius: 10px 2px;
`;

const BlogTag = ({ text, background }) => (
    <StyledBlogTag style={{ background }}>{text}</StyledBlogTag>
);

// TODO: add TypeScript, propTypes
export const BlogEntity = ({ id, title, expanded, description, tags, onClick }) => {
    const onClickHandler = () => {
        onClick(id);
    };

    const renderTags = tags =>
        tags.map(tag => (
            <BlogTag key={tag.id} text={tag.name} background={tag.background} />
        ));

    return (
        <section onClick={onClickHandler}>
            <StyledBlogEntity>
                <span>{title}</span>
                <UnorderedList>{renderTags(tags)}</UnorderedList>
            </StyledBlogEntity>
            {expanded && <section>{description}</section>}
        </section>
    );
};
