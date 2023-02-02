const router = require('express').Router();
const {
  getComments,
  getSingleComment,
  createComment,
} = require('../../controllers/commentController');

// /api/comments
router.route('/').get(getComments).post(createComment);

// /api/comments/:commentId
router.route('/:commentId').get(getSingleComment);

module.exports = router;
