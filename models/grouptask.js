'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groupTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      groupTask.belongsTo(models.Group, {
        foreignKey: 'groupId',
        onDelete: 'CASCADE',
      })
    }
  }
  groupTask.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'groupTask',
    tabelName: 'grouptasks'
  });
  return groupTask;
};