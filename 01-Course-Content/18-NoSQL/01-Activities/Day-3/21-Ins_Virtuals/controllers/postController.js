const { Post } = require('../models');

module.exports = {
  getPosts(req, res) {
    Post.find()
      .then((posts) => res.json(posts))
      .catch((err) => res.status(500).json(err));
  },
  getSinglePost(req, res) {
    Post.findOne({ _id: req.params.postId })
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No post with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createPost(req, res) {
    Post.create(req.body)
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => res.status(500).json(err));
  },
};
