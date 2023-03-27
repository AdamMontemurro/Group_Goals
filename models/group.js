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
    groupMembers: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: []
    },
    tasks: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      defaultValue: []
    },
    owner: DataTypes.INTEGER,
    name : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Group',
    tableName:"groups"
  });
  return Group;
};