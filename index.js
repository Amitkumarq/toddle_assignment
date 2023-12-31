const express = require('express');
require('dotenv').config();

const api = require('./Routes/route');

const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(api);

app.listen(3000, () => {
  console.log('running server');
});
