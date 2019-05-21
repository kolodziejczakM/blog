/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';

const StyledBlogEntity = styled.section`
    cursor: pointer;
    color: #666;
    font-weight: bold;
    background: ${({ theme }) => theme.white};
    padding: 10px 40px;
    margin-bottom: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    align-items: center;
    grid-area: ${props => (props.id === 0 ? 'MainArticle' : 'Article' + props.id)};
`;

// TODO: add TypeScript, propTypes
export const BlogEntity = ({ id, title, backgroundFile, onClick }) => {
    const onClickHandler = () => {
        onClick(id);
    };

    return (
        <StyledBlogEntity id={id} onClick={onClickHandler}>
            <span>{title}</span>
            <img src={`~images/${backgroundFile}`} alt="picture" />
        </StyledBlogEntity>
    );
};
