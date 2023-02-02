const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
  {
    tagName: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#008080',
    },
    createdAt: Date,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

tagSchema
  .virtual('getTagCss')
  // Getter
  .get(function () {
    return `color: ${this.color}`;
  });

const Tag = model('tag', tagSchema);

module.exports = Tag;
