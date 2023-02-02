import { gql } from '@apollo/client';

export const CREATE_POST = gql`
  mutation createPost($post: PostData) {
    createPost(post: $post) {
      success
      post {
        id
      }
    }
  }
`;

export const ADD_AUTHOR = gql`
  mutation addAuthor($author: AuthorData!) {
    createAuthor(author: $author) {
      success
      author {
        id
      }
    }
  }
`;
