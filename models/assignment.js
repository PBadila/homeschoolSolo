'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Assignment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Assignment.belongsTo(models.User, {
        foreignKey: 'userID',
      });
    }
  }
  Assignment.init({
    title: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    link: DataTypes.TEXT,
    video: DataTypes.TEXT,
    userID: DataTypes.INTEGER,
    completed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Assignment',
  });
  return Assignment;
};