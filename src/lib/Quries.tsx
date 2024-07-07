import { gql } from "graphql-request";

export const GET_POSTS_COUNT = gql`
query GetPostsCount {
  posts {
    pageInfo {
      total
    }
  }
}
`;


export const GET_POST = gql`

  query GetPost($id: ID = "") {
  post(id: $id, idType: SLUG) {
    id
    slug
    title
    date
    blocksJSON
  }
}
`;

export const GET_POST_SEO = gql`
query GetPostSeo($id: ID!) {
    post(idType: SLUG, id: $id) {
      seo {
        metaDesc
        title
        readingTime
        focuskw
        metaKeywords
        opengraphImage {
          sourceUrl
        }
      }
    }
  }
`;