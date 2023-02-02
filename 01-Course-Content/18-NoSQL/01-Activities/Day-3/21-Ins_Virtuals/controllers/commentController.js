const { Post, Comment } = require('../models');

module.exports = {
  getComments(req, res) {
    Comment.find()
      .then((comment) => res.json(comment))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single comment
  getSingleComment(req, res) {
    Comment.findOne({ _id: req.params.commentId })
      .then((comment) =>
        !comment
          ? res.status(404).json({ message: 'No comment found with that id' })
          : res.json(comment)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a comment
  createComment(req, res) {
    Comment.create(req.body)
      .then((comment) => {
        return Post.findOneAndUpdate(
          { _id: req.body.postId },
          { $push: { comments: comment._id } },
          { new: true }
        );
      })
      .then((post) =>
        !post
          ? res
              .status(404)
              .json({ message: 'comment created, but no posts with this ID' })
          : res.json({ message: 'comment created' })
      )
      .catch((err) => {
        console.error(err);
      });
  },
};
