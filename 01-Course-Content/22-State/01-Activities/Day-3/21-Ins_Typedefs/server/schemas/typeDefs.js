const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    authorId: ID!
    votes: Int
  }

  input PostData {
    id: Int!
    title: String
    authorId: ID!
    votes: Int
  }

  input AuthorData {
    id: Int!
    firstName: String
    lastName: String
    posts: [PostData]
  }

  type postResponse {
    success: Boolean
    post: Post
  }

  type authorResponse {
    success: Boolean
    author: Author
  }

  type Query {
    posts: [Post]
    authors: [Author]
    author(id: Int!): Author
    post(id: Int!): Post
  }

  type Mutation {
    createPost(post: PostData): postResponse
    createAuthor(author: AuthorData): authorResponse
  }
`;

module.exports = typeDefs;
