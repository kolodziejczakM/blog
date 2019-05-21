/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';

const StyledBlogEntity = styled.section`
    position: relative;
    cursor: pointer;
    color: #666;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    align-items: center;
    background: ${({ theme }) => theme.white};
    font-size: ${({ id }) => (!id ? '18px' : '14px')};
    grid-area: ${({ id }) => (!id ? 'MainArticle' : 'Article' + id)};
`;

const StyledImg = styled.img`
    object-fit: contain;
    object-position: 50% 50%;
    width: 100%;
`;

// TODO: add TypeScript, propTypes
export const BlogEntity = ({ id, title, backgroundFile, onClick }) => {
    const onClickHandler = () => {
        onClick(id);
    };

    return (
        <StyledBlogEntity id={id} onClick={onClickHandler}>
            <span style={{ position: 'absolute' }}>{title}</span>
            <StyledImg src={`/static/images/${backgroundFile}`} alt="picture" />
        </StyledBlogEntity>
    );
};
