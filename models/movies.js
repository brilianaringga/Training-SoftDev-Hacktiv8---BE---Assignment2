'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movies.init({
    title: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    trailerUrl: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    rating: DataTypes.NUMBER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};