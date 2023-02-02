import { gql } from '@apollo/client';

export const QUERY_AUTHORS = gql`
  query getAuthors {
    authors {
      id
      firstName
      lastName
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      id
    }
  }
`;

export const QUERY_AUTHOR = gql`
  query getAuthor($id: Int!) {
    author(id: $id) {
      id
      lastName
      firstName
    }
  }
`;

export const QUERY_POST = gql`
  query getPost($id: Int!) {
    post(id: $id) {
      id
      authorId
      title
      votes
    }
  }
`;
