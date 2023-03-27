'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Group.init({
    groupMembers: DataTypes.ARRAY,
    tasks: DataTypes.ARRAY
  }, {
    sequelize,
    modelName: 'Group',
    tableName:"groups"
  });
  return Group;
};