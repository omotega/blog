const Post = require("../models/postmodel");
const asynchandler = require('express-async-handler')

const getposts = asynchandler(async (req, res) => {
  const post = await Post.find();
  res.status(200).json(post);
});

const createpost = asynchandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please input the text field");
  }
  const post = await Post.create({
    text: req.body.text,
  });
  res.status(200).json(post)
});

const updatepost = asynchandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post) {
    res.status(400)
    throw new Error('post does not exist')
  }
  const updatedpost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedpost);

});

const deletepost = asynchandler(async (req, res) => {
  const post = await Post.findById(req.params.id)
  if (!post) {
    res.status(400)
    throw new Error('post does not exist')
  }
  await Post.deleteOne(post);
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getposts,
  createpost,
  updatepost,
  deletepost,
};
