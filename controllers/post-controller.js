const Post = require('../models/post');
const createPath = require('../utility/createPath');

const handleError = (res, err) => {
   console.log(err);
   res.render(createPath('error'), { title: 'Error' });
}

const getPost = (req, res) => {
   const title = 'Post'
   Post
      .findById(req.params.id)
      .then((post) => res.render(createPath('post'), { title, post }))
      .catch((err) => handleError(res, err));
}

const getPosts = (req, res) => {
   const title = 'Posts'
   Post
      .find()
      .sort({ createdAt: -1 })
      .then((posts) => res.render(createPath('posts'), { title, posts }))
      .catch((err) => handleError(res, err));

}

const deletePost = (req, res) => {
   Post
      .findByIdAndDelete(req.params.id)
      .then((result) => res.sendStatus(200))
      .catch((err) => handleError(res, err));

}

const addNewPost = (req, res) => {
   const { title, author, content } = req.body;
   const post = new Post({ title, author, content });
   post
      .save()
      .then((result) => res.redirect('/posts'))
      .catch((err) => handleError(res, err));

}

const getNewPost = (req, res) => {
   res.render(createPath('new-post'));
}

const getEditPost = (req, res) => {
   const title = 'Edit Post'
   Post
      .findById(req.params.id)
      .then((post) => res.render(createPath('edit-post'), { title, post }))
      .catch((err) => handleError(res, err));

}

const editPost = (req, res) => {
   const { title, content, author } = req.body;
   const id = req.params.id;
   Post
      .findByIdAndUpdate(id, { title, content, author })
      .then((result) => res.redirect(`/post/${id}`))
      .catch((err) => handleError(res, err));

}


module.exports = {
   getPost,
   getPosts,
   deletePost,
   addNewPost,
   getNewPost,
   getEditPost,
   editPost

}