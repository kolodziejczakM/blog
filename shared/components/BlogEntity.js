/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';

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

// TODO: add TypeScript, propTypes
export const BlogEntity = ({ id, title, backgroundFile, onClick }) => {
    const onClickHandler = () => {
        onClick(id);
    };

    return (
        <section onClick={onClickHandler}>
            <StyledBlogEntity>
                <span>{title}</span>
                <img src={`~images/${backgroundFile}`} alt="picture" />
            </StyledBlogEntity>
        </section>
    );
};
