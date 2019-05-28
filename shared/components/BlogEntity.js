/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { string, number, bool } from 'prop-types';
import { useState, useRef, useEffect } from 'react';

const StyledBlogEntity = styled.a`
    outline: 1px solid ${({ theme }) => theme.lightGreen};
    position: relative;
    cursor: pointer;
    color: ${({ theme }) => theme.lightGray};
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
    height: 200px;

    @media (max-width: 500px) {
        height: 150px;
    }
`;

const StyledIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
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

    ::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: 1200px) {
        font-size: 16px;
    }

    @media (max-width: 500px) {
        font-size: 14px;
    }
`;

export const BlogEntity = ({ focus, title, backgroundFile, href, onMedium }) => {
    const [isFocused] = useState(focus);
    const ref = useRef();

    useEffect(() => {
        if (isFocused) {
            ref.current.focus();
        }
    }, []);

    return (
        <StyledBlogEntity href={href} ref={ref}>
            {onMedium && <StyledIcon src="/static/icons/medium.svg" />}
            <StyledImg src={`/static/images/webp/${backgroundFile}`} alt={title} />
            <StyledLabel>{title}</StyledLabel>
        </StyledBlogEntity>
    );
};

BlogEntity.defaultProps = {
    focus: false
};

BlogEntity.propTypes = {
    focus: bool,
    title: string.isRequired,
    backgroundFile: string.isRequired,
    href: string.isRequired,
    onMedium: bool.isRequired
};
