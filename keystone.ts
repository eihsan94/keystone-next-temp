import { config, list } from '@keystone-next/keystone';
import { text } from '@keystone-next/keystone/fields';

const Post = list({
  fields: {
    title: text({ isRequired: true }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
  },
});

export default config({
  db: {
      provider: 'postgresql',
      url: 'postgres://unusbvclcikzgs:4d7c53804f90b1bce55b71f9f5a9ceb612e3a08ebc971b792ceaffb71ce52cd8@ec2-23-20-208-173.compute-1.amazonaws.com:5432/d6k9m8l6hm053g',
  },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post },
  graphql: {
    debug: process.env.NODE_ENV !== 'production', // change this to debug: true, if we want to see the graphql playground in prod
    queryLimits: { maxTotalResults: 100 },
    path: '/api/graphql',
    apolloConfig: {
      playground: process.env.NODE_ENV !== 'production', // change this to playground: true, if we want to see the graphql playground in prod
      introspection: process.env.NODE_ENV !== 'production', // change this to introspection: true, if we want to see the graphql playground in prod
    },
  },
});