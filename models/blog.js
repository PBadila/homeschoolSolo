'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
        Blog.belongsTo(models.User, {
          foreignKey: 'userID',
        });
      }
    
  }
  Blog.init({
    date: DataTypes.DATE,
    entry: DataTypes.TEXT,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Blog',
  });
  return Blog;
};