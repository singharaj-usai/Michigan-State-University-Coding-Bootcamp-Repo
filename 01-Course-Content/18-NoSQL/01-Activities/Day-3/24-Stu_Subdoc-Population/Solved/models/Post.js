const { Schema, model } = require('mongoose');

// Schema to create Post model
const postSchema = new Schema(
  {
    published: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'tag',
      },
    ],
    text: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `tagCount` that gets the amount of comments per user
postSchema
  .virtual('tagCount')
  // Getter
  .get(function () {
    return this.tags.length;
  });

// Initialize our Post model
const Post = model('post', postSchema);

module.exports = Post;
