const express = require("express");
const dotenv = require("dotenv").config();
const colors = require('colors')
const { errorhandler } = require('./middlewares/errormiddleware');
const port = process.env.port || 3200;

const connectdb = require('./config/db');
const postrouter = require('./routes/postroute');
const userrouter = require('./routes/userroutes')

connectdb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts',postrouter);
app.use('/api/users',userrouter);

app.use(errorhandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
