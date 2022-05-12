const Post = require('../models/post');

const handleError = (res, err) => {
   res.status(500).json(err);
}

const getPost = (req, res) => {
   Post
      .findById(req.params.id)
      .then((post) => res.status(200).json(post))
      .catch((err) => handleError(res, err));
}

const getPosts = (req, res) => {
   Post
      .find()
      .sort({ createdAt: -1 })
      .then((posts) => res.status(200).json(posts))
      .catch((err) => handleError(res, err));

}

const deletePost = (req, res) => {
   Post
      .findByIdAndDelete(req.params.id)
      .then(() => res.status(200).json({ message: 'Post deleted' }))
      .catch((err) => handleError(res, err));

}

const addNewPost = (req, res) => {
   const { title, author, content } = req.body;
   const post = new Post({ title, author, content });
   post
      .save()
      .then((post) => res.status(200).json(post))
      .catch((err) => handleError(res, err));

}

const editPost = (req, res) => {
   const { title, content, author } = req.body;
   const id = req.params.id;
   Post
      .findByIdAndUpdate(id, { title, content, author }, { new: true })
      .then((post) => res.status(200).json(post))
      .catch((err) => handleError(res, err));
}


module.exports = {
   getPost,
   getPosts,
   deletePost,
   addNewPost,
   editPost
}