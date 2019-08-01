const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const PORT = 3024;

require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());

const router = require('./routes/index');

app.use(router);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-kflqu.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
  });

app.listen(PORT, () => {
  console.log(`Port is listening on ${PORT}`); // eslint-disable-line
});

module.exports = app;
