const connection = require('../config/connection');
const { Post, Tags } = require('../models');
// Import functions for seed data
const { getRandomColor, getRandomPost, genRandomIndex } = require('./data');

// Start the seeding runtime timer
console.time('seeding');

// Creates a connection to mongodb
connection.once('open', async () => {
  // Delete the entries in the collection
  await Post.deleteMany({});
  await Tags.deleteMany({});

  // Empty arrays for randomly generated posts and tags
  const tags = [];
  const posts = [];

  // Function to make a post object and push it into the posts array
  const makePost = (text) => {
    posts.push({
      published: Math.random() < 0.5,
      text,
      tags: [tags[genRandomIndex(tags)]._id],
    });
  };

  // Create 20 random tags and push them into the tags array
  for (let i = 0; i < 20; i++) {
    const tagname = getRandomColor();

    tags.push({
      tagname,
      color: tagname,
    });
  }

  // Wait for the tags to be inserted into the database
  await Tags.collection.insertMany(tags);

  // For each of the tags that exist, make a random post of length 50
  tags.forEach(() => makePost(getRandomPost(50)));

  // Wait for the posts array to be inserted into the database
  await Post.collection.insertMany(posts);

  // Log out a pretty table for tags and posts, excluding the excessively long text property
  console.table(tags);
  console.table(posts, ['published', 'tags', '_id']);
  console.timeEnd('seeding');
  process.exit(0);
});
