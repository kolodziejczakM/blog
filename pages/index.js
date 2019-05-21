/*
 * Copyright 2019 Marcin Kołodziejczak, MIT license
 */

import WithLayout from '~components/WithLayout';
import { BlogEntity } from '~components/BlogEntity';
import BlogEntities from '~data/BlogEntities.json';

const Index = () => {
    return (
        <section>
            {BlogEntities.map(entity => (
                <BlogEntity
                    key={entity.id}
                    id={entity.id}
                    title={entity.title}
                    backgroundFile={entity.backgroundFile}
                    onClick={() => {}}
                />
            ))}
        </section>
    );
};

export default WithLayout(Index);
