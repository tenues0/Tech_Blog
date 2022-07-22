const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newpost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newpost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  console.log("PUT REQUEST")
  console.log("****req.body from PUT REQUEST****", req.body)
  try {
    const editpost = await Post.update({
      where: {
        user_id: req.session.user_id,
        title: req.body.title,
        content: req.body.content,
        id: req.body.post_id,
      },
    });

    console.log(editpost)

    if (!editpost) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(editpost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
