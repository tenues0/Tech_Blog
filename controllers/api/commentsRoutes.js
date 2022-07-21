const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log("****req.body from commentRoutes****", req.body)
  try {
    const newComment = await Comments.create({
      ...req.body,
      user_id: req.session.user_id
      // content: req.body.content,
      // post_id: req.body.post_id,
    });

    console.log("*********newComment", newComment);

    res.status(200).json(newComment);
  } catch (err) {
    console.log("the error", err);
    res.status(400).json(err);
  }
});

module.exports = router;