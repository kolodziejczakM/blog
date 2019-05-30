/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { string, bool } from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { colors, fontSizes, breakpoints } from '~shared/theme';

const StyledBlogEntity = styled.a`
    outline: 1px solid ${colors.lightGreen};
    position: relative;
    cursor: pointer;
    color: ${colors.lightGray};
    background: ${colors.white};

    :hover {
        section {
            background: ${colors.green};
        }
    }

    :focus {
        outline: 4px solid ${colors.brightGreen};
    }
`;

const StyledImg = styled.img`
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 200px;

    @media (max-width: ${breakpoints[500]}) {
        height: 150px;
    }
`;

const StyledIcon = styled.img`
    opacity: 0.5;
    position: absolute;
    ${({ bottom }) => (bottom ? 'bottom: 50px' : 'top: 10px')};
    right: 10px;
    width: 50px;
    height: 50px;
`;

const StyledLabel = styled.section`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: ${fontSizes[20]};
    padding: 10px;
    color: ${colors.white};
    background: ${colors.lightGreen};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    ::first-letter {
        text-transform: uppercase;
    }

    @media (max-width: ${breakpoints[1200]}) {
        font-size: ${fontSizes[16]};
    }

    @media (max-width: ${breakpoints[500]}) {
        font-size: ${fontSizes[14]};
    }
`;

const iconsPath = '/static/icons';

export const BlogEntity = ({
    focus,
    title,
    backgroundFile,
    href,
    onMedium,
    inPolish
}) => {
    const [isFocused] = useState(focus);
    const ref = useRef();

    useEffect(() => {
        if (isFocused) {
            ref.current.focus();
        }
    }, []);

    return (
        <StyledBlogEntity href={href} ref={ref}>
            {onMedium && <StyledIcon src={`${iconsPath}/medium.svg`} />}
            {inPolish && <StyledIcon bottom src={`${iconsPath}/poland-flag.svg`} />}
            <StyledImg src={`/static/images/webp/${backgroundFile}`} alt={title} />
            <StyledLabel>{title}</StyledLabel>
        </StyledBlogEntity>
    );
};

BlogEntity.defaultProps = {
    focus: false,
    onMedium: false,
    inPolish: false
};

BlogEntity.propTypes = {
    title: string.isRequired,
    backgroundFile: string.isRequired,
    href: string.isRequired,
    focus: bool,
    onMedium: bool,
    inPolish: bool
};
