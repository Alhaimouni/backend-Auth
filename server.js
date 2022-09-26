'use strict';

const express = require('express');
const cors = require('cors');
const { notFound } = require('./02-error-handlers/404');
const { errorHandler } = require('./02-error-handlers/500');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.status(200).json(`Main page`));


function serverStart(port) {
  app.listen(port, () => console.log(`Up and running @ ${port}`));
}


app.use('*', notFound);
app.use(errorHandler);


module.exports = { serverStart };