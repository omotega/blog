const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const asynchandler = require('express-async-handler');

const register = asynchandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("please fill in the required field");
    }

    const userexist = await User.findOne({email});
    if (userexist) {
      res.status(400);
      throw new Error("user already exist");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedpassword,
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(400);
      throw new Error("invalid credentials");
    }
  
});

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if(!user) {
            res.status(400)
            throw new Error('user does not exist')
        }

    } catch (error) {
        
    }
  res.status(200).json({ message: login });
};

module.exports = {
  register,
  login,
};
