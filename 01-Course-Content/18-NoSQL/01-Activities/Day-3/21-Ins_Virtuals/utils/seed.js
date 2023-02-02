const connection = require('../config/connection');
const { Post, Comment } = require('../models');
const {
  getRandomName,
  getRandomComments,
  getRandomPost,
  genRandomIndex,
} = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await Post.deleteMany({});
  await Comment.deleteMany({});

  // Empty arrays for randomly generated posts and comments
  const comments = [...getRandomComments(10)];
  const posts = [];

  // Makes comments array
  const makePost = (text) => {
    posts.push({
      text,
      username: getRandomName().split(' ')[0],
      comments: [comments[genRandomIndex(comments)]._id],
    });
  };

  // Wait for the comments to be inserted into the database
  await Comment.collection.insertMany(comments);

  // For each of the comments that exist, make a random post of 10 words
  comments.forEach(() => makePost(getRandomPost(10)));

  // Wait for the posts array to be inserted into the database
  await Post.collection.insertMany(posts);

  // Log out a pretty table for comments and posts
  console.table(comments);
  console.table(posts);
  console.timeEnd('seeding complete 🌱');
  process.exit(0);
});
