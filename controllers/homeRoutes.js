const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comments,
          include: {model: User, attributes: ['username']},
          attributes: ['content', 'date_created','id']
        }
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    console.log("********posts", posts);

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comments,
          include: {model: User, attributes: ['username']},
          attributes: ['content', 'date_created','id']
        }
      ],
    });

    const post = postData.get({ plain: true });
    
    console.log("*********router.get('/post/:id'" ,post)
    // console.log("viewing the post json object")
    // console.log(post.comments[0].user.username)

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/editpost/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comments,
          include: {model: User, attributes: ['username']},
          attributes: ['content', 'date_created','id']
        }
      ],
    });

    const post = postData.get({ plain: true });
    console.log("router.get('/editpost/:id'")

    res.render('editpost', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        { model: Post }, {model: Comments}],
    });

    const user = userData.get({ plain: true });
    console.log("router.get('/dashboard' was triggered)")
    console.log("*********user", user);

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {

  res.render('signup');
});

module.exports = router;
