const express = require("express");
const dotenv = require("dotenv").config();
const colors = require('colors')
const port = process.env.port || 3200;

const errorhandler = require('./middlewares/errormiddleware');
const connectdb = require('./config/db');
const userrouter = require('./routes/postroute');

connectdb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts',userrouter);
app.use(errorhandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
