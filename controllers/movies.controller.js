const { Movies } = require("../models");

exports.getAllMovies = async (req, res, next) => {
  try {
    const movies = await Movies.findAll();

    res.json(movies);
  } catch (error) {
    next(error);
  }
};
