const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require('../../controllers/comment-controller');

// prettier-ignore
router
    .route('/:pizzaId')
    .post(addComment);

// prettier-ignore
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

// prettier-ignore
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

// prettier-ignore
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;
