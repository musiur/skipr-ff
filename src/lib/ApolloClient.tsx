import { GraphQLClient } from 'graphql-request'


export const client = new GraphQLClient(`${process.env.NEXT_PUBLIC_WORDPRESS_BACKEND_URI || 'https://w3mantra.com/skipr_wp'}/graphql`)

