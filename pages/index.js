/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import { breakpoints, colors, zIndexes, fontSizes } from '~shared/theme';
import WithLayout from '~components/WithLayout';
import WithStaticTexts from '~components/WithStaticTexts';
import { BlogEntity } from '~components/BlogEntity';
import articles from '~data/articles.json';
import scenarios from '~data/scenarios.json';

const StyledGrid = styled.section`
    z-index: ${zIndexes[1]};
    display: grid;
    position: relative;
    gap: 40px 80px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;

    @media (max-width: ${breakpoints[1000]}) {
        gap: 20px 40px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;

const StyledSection = styled.section`
    padding: 0 0 48px;

    @media (max-width: ${breakpoints[500]}) {
        padding: 0 0 36px;
    }
`;

const StyledHeading = styled.h1`
    color: ${colors.white};
    font-weight: normal;
    font-size: ${fontSizes[50]};
    margin: 0 0 22px 0;

    @media (max-width: ${breakpoints[1000]}) {
        font-size: ${fontSizes[32]};
    }
`;

const Index = WithStaticTexts(
    {
        articles: 'Articles',
        scenarios: 'Scenarios'
    },
    ({ staticTexts }) => (
        <section>
            <StyledSection>
                <StyledHeading>{staticTexts.articles}</StyledHeading>
                <StyledGrid>
                    {Object.values(articles).map(({ query: { metadata } }, id) => (
                        <BlogEntity
                            key={metadata.title}
                            focus={!id}
                            title={metadata.title}
                            backgroundFile={metadata.backgroundFile}
                            href={
                                metadata.onMedium
                                    ? metadata.href
                                    : `/articles/${metadata.href}`
                            }
                            onMedium={metadata.onMedium}
                        />
                    ))}
                </StyledGrid>
            </StyledSection>
            <StyledSection>
                <StyledHeading>{staticTexts.scenarios}</StyledHeading>
                <StyledGrid>
                    {scenarios.map(scenario => (
                        <BlogEntity
                            key={scenario.id}
                            title={scenario.title}
                            backgroundFile={scenario.banner}
                            href={scenario.href}
                            inPolish
                        />
                    ))}
                </StyledGrid>
            </StyledSection>
        </section>
    )
);

export default WithLayout(Index);
