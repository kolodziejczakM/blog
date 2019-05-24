/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

// TODO: try to reuse Anchor instead of <a>
const StyledBlogEntity = styled.a`
    position: relative;
    cursor: pointer;
    color: #666;
    background: ${({ theme }) => theme.white};
    height: 80%;
    align-self: end;
    grid-area: ${({ id }) => (!id ? 'MainArticle' : 'Article' + id)};

    :hover {
        section {
            background: ${({ theme }) => theme.green};
        }
    }

    :focus {
        outline: 4px solid ${({ theme }) => theme.brightGreen};
    }
`;

const StyledImg = styled.img`
    object-fit: fill;
    object-position: center center;
    width: 100%;
    height: 100%;
`;

const StyledLabel = styled.section`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: ${({ id }) => (!id ? '24px' : '16px')};
    padding: ${({ id }) => (!id ? '14px 16px' : '10px 12px')};
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.lightGreen};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

// TODO: add TypeScript, propTypes
export const BlogEntity = ({ id, title, backgroundFile, href }) => {
    const [isFocused] = useState(!id);
    const ref = useRef();

    useEffect(() => {
        if (isFocused) {
            ref.current.focus();
        }
    }, []);

    return (
        <StyledBlogEntity id={id} href={href} ref={ref}>
            <StyledImg src={`/static/images/${backgroundFile}`} alt={title} />
            <StyledLabel id={id}>{title}</StyledLabel>
        </StyledBlogEntity>
    );
};
