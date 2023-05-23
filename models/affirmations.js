'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Affirmations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Affirmations.init({
    statement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Affirmations',
  });
  return Affirmations;
};