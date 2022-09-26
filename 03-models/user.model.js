'use strict';

function userModel(sequelize, Datatypes) {
  return (
    sequelize.define('user', {
      token: { type: Datatypes.VIRTUAL },
      username: { type: Datatypes.STRING, unique: true, allowNull: false },
      password: { type: Datatypes.STRING, allowNull: false },
      email: { type: Datatypes.STRING, unique: true, allowNull: false },
      role: { type: Datatypes.ENUM('admin', 'user'), defaultValue: 'user' },
      capabilites: {
        type: Datatypes.VIRTUAL,
        get() {
          const cap = {
            admin: ['create', 'read', 'update', 'delete'],
            user: ['create', 'read']
          }
          return (cap[this.role]);
        }
      },
    })
  );
}


module.exports = { userModel };