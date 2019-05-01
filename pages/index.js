/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import { useState } from 'react';
import WithLayout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import BlogEntities from '~data/BlogEntities.json';

const useBlogEntities = () => {
    const blogEntitiesDefault = BlogEntities.map(plainBlogEntity => ({
        ...plainBlogEntity,
        expanded: false
    }));

    const [blogEntities, toggleEntityExpansion] = useState(blogEntitiesDefault);

    const toggleExpansion = id => {
        toggleEntityExpansion(prevBlogEntities =>
            prevBlogEntities.map(entity => {
                if (entity.id === id) {
                    return {
                        ...entity,
                        expanded: !entity.expanded
                    };
                }

                return entity;
            })
        );
    };

    return [blogEntities, toggleExpansion];
};

const Index = () => {
    const [blogEntities, toggleExpansion] = useBlogEntities();

    return (
        <section>
            {blogEntities.map(entity => (
                <BlogEntity
                    key={entity.id}
                    id={entity.id}
                    title={entity.title}
                    expanded={entity.expanded}
                    description={entity.description}
                    tags={entity.tags}
                    onClick={toggleExpansion}
                />
            ))}
        </section>
    );
};

export default WithLayout(Index);
