'use strict';

const { serverStart } = require('./server');
const { sequelize } = require('./03-models');
require('dotenv').config();

sequelize.sync()
  .then((resolve) => serverStart(process.env.PORT))
  .catch((reject) => console.log(`@index.js/sync().catch() : ${reject}`));


