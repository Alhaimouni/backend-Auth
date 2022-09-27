'use strict';

function createUserModel(sequelize, Datatypes) {
  return (
    sequelize.define('user', {
      username: { type: Datatypes.STRING, allowNull: false, unique: true },
      email: { type: Datatypes.STRING, allowNull: false, unique: true },
      password: { type: Datatypes.STRING, allowNull: false },
      token: { type: Datatypes.VIRTUAL }
    })
  )
}



module.exports = { createUserModel };