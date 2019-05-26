/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

// TODO: try to reuse Anchor instead of <a>
// TODO: use / register colors => withLayout
const StyledBlogEntity = styled.a`
    position: relative;
    cursor: pointer;
    color: #666;
    background: ${({ theme }) => theme.white};

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
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
`;

const StyledLabel = styled.section`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 20px;
    padding: 10px;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme.lightGreen};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width: 1200px) {
        font-size: 16px;
    }
`;

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
            <StyledImg src={`/static/images/webp/${backgroundFile}`} alt={title} />
            <StyledLabel id={id}>{title}</StyledLabel>
        </StyledBlogEntity>
    );
};
