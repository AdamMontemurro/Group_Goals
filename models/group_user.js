'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_user extends Model {

    static associate(models) {
      
    }
  }
  group_user.init({
    groupId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group_user',
    tableName: 'group_users'
  });
  return group_user;
};