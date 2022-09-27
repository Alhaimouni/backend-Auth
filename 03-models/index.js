// 'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createPostModel } = require('./post.model');
require('dotenv').config();


const POSTGRES_URL = process.env.DATABASE_URL;

sequelizeOption = {
  dialectOptions: {
    ssl: {
      require: false,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

sequelize.authenticate()
  .then(() => { console.log(` Connected to DMBS`) })
  .catch((reject) => { console.log(`Rejected : ${reject}`) });

const postModel = createPostModel(sequelize, DataTypes);

module.exports = { sequelize, postModel };

















//====
// const { Sequelize, DataTypes } = require('sequelize');

// const sequelizeOption = {
//   // dialectOptions: {
//   //   ssl: {
//   //     require: false,
//   //     rejectUnauthorized: false,
//   //   },
//   // },
// }

// const POSTGRES_URL = process.env.DATABASE_URL;
// const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

// sequelize.authenticate()
//   .then((resolve) => console.log(`Greate connection with database :D`))
//   .catch((reject) => console.log(`@03/index.js/authenticate().catch() : ${reject}`));



// module.exports = { sequelize, };