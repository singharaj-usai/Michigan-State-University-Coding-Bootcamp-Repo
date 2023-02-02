const authors = [
  { id: 1, firstName: 'John', lastName: 'Smith' },
  { id: 2, firstName: 'Xander', lastName: 'R' },
  { id: 3, firstName: 'Grace', lastName: 'C' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 15 },
  { id: 2, authorId: 2, title: 'Intro to Apollo', votes: 12 },
  { id: 3, authorId: 2, title: 'TypeDefs', votes: 10 },
  { id: 4, authorId: 3, title: 'MERN', votes: 3 },
];

module.exports = {
  Query: {
    posts: () => posts,
    authors: () => authors,
    author: (parent, args) => {
      return authors.find((author) => author.id === args.id);
    },
    post: (parent, args) => {
      return posts.find((post) => post.id === args.id);
    },
  },

  Mutation: {
    createPost: (parent, newPost) => {
      console.log('🚀 newPost id', newPost.post.id);
      posts.push(newPost.post);
      const result = {
        success: true,
        post: newPost.post,
      };
      return result;
    },
    createAuthor: (parent, newAuthor) => {
      console.log('🚀 newAuthor', newAuthor);

      authors.push(newAuthor.author);
      const result = {
        success: true,
        author: newAuthor.author,
      };
      console.log(newAuthor.author);
      return result;
    },
  },
};
