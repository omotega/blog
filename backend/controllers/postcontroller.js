const Post = require("../models/postmodel");
const asynchandler = require('express-async-handler')
const getposts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(400);
    throw error;
  }
};

const createpost = async (req, res) => {
  try {
    if (!req.body.text) {
      res.status(400);
      throw new Error("please input the text field");
    }
    const post = await Post.create({
      text: req.body.text,
    });
    res.status(200).json(post)
  } catch (error) {
    res.status(400);
    throw new Error('could not create post');
  }
};

const updatepost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      res.status(400)
      throw new Error('post does not exist')
    }
    const updatedpost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    res.status(200).json(updatedpost);
  } catch (error) {
    res.status(400)
    throw new Error('could not update post')
  }
};

const deletepost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (!post) {
      res.status(400)
      throw new Error('post does not exist')
    }
    await Post.deleteOne(post);
    res.status(200).json({ id: req.params.id });
  } catch (error) {
    res.status(400);
    throw new Error('user not deleted');
  }
};

module.exports = {
  getposts,
  createpost,
  updatepost,
  deletepost,
};
