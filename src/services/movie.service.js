const movie = require('../models/movie');

const findAllMoviesService = async () => {
  const movies = await movie.find();
  return movies;
};

const findByIdMovieService = async (idParam) => {
  const movieid = await movie.findById(idParam);
  return movieid;
};

const createMovieService = async (newMovie) => {
  const createdMovie = await movie.create(newMovie);
  return createdMovie;
};

const updateMovieService = async (id, movieEdited) => {
  const movieUpdate = await movie.findByIdAndUpdate(id, movieEdited);
  return movieUpdate;
};

const deleteMovieService = async (id) => {
  return await movie.findByIdAndDelete(id);
};

module.exports = {
  findAllMoviesService,
  findByIdMovieService,
  createMovieService,
  updateMovieService,
  deleteMovieService,
};
