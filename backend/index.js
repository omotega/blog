const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.port || 3200;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})