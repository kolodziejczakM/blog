/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import styled from 'styled-components';
import Layout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import articles from '~data/articles.json';
import scenarios from '~data/scenarios.json';

const StyledGrid = styled.section`
    z-index: 1;
    display: grid;
    position: relative;
    gap: 40px 80px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;

    @media (max-width: 1000px) {
        gap: 20px 40px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;

const StyledSection = styled.section`
    padding: 24px 0;
`;

const StyledHeading = styled.h1`
    color: ${({ theme }) => theme.white};
    font-size: 50px;
    margin: 0 0 22px 0;

    @media (max-width: 1000px) {
        font-size: 32px;
    }
`;

// TODO: Hoist Layout to App component (change its fileName), cause it wraps all pages
const Index = () => (
    <Layout>
        <section>
            <StyledSection>
                <StyledHeading>Articles</StyledHeading>
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
                <StyledHeading>Scenarios</StyledHeading>
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
    </Layout>
);

export default Index;
