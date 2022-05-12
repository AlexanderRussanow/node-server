const express = require('express');
const router = express.Router();
const { getPost, getPosts, deletePost, addNewPost, getNewPost, getEditPost, editPost } = require('../controllers/post-controller.js');


router.get('/post/:id', getPost)
router.get('/posts', getPosts)
router.delete('/post/:id', deletePost)
router.post('/new-post', addNewPost);
router.get('/new-post', getNewPost)
router.get('/edit/:id', getEditPost)
router.put('/edit/:id', editPost)


module.exports = router;