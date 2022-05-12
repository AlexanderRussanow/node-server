const express = require('express');
const router = express.Router();
const { getPost, getPosts, deletePost, addNewPost, editPost } = require('../controllers/api-post-controller.js');

// get post by id
router.get('/api/post/:id', getPost)
// get all posts
router.get('/api/posts', getPosts)
// delete post by id
router.delete('/api/post/:id', deletePost)
// add new post
router.post('/api/new-post', addNewPost);
// update post by id
router.put('/api/edit/:id', editPost)



module.exports = router;