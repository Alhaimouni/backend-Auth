'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { createCommentModel } = require('./comment.model');
const { createPostModel } = require('./post.model');
require('dotenv').config();


const POSTGRES_URL = process.env.DATABASE_URL;

const sequelizeOption = {
  // dialectOptions: {
  //   ssl: {
  //     require: false,
  //     rejectUnauthorized: false,
  //   },
  // },
};

const sequelize = new Sequelize(POSTGRES_URL, sequelizeOption);

sequelize.authenticate()
  .then(() => { console.log(` Connected to DMBS`) })
  .catch((reject) => { console.log(`Rejected : ${reject}`) });

const postModel = createPostModel(sequelize, DataTypes);
const commentModel = createCommentModel(sequelize, DataTypes);

postModel.hasMany(commentModel, { foreignKey: "postId", sourceKey: "id" });
commentModel.belongsTo(postModel, { foreignKey: "postId", targetKey: "id" });


module.exports = { sequelize, postModel, commentModel };
















