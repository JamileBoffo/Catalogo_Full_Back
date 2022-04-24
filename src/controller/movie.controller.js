const mongoose = require('mongoose');
const { validId, validObjectBody } = require('../middlewares/movie.middleware');
const moviesService = require('../services/movie.service');

const findAllMoviesController = async (req, res) => {
  const movies =  await moviesService.findAllMoviesService();

  if(movies.lenght == 0){
    return res.status(400).send({ message: 'Não existem filmes cadastrados' })
  }

  res.send(movies);
};

const findByIdMovieController = async (req, res) => {
  const idParam = req.params.id;

  const chosenMovie = await moviesService.findByIdMovieService(idParam);

  if(!chosenMovie) {
    return req.status(400).send({message: 'Filme não encontrado' });
  }
  res.send(chosenMovie);
};

const createMovieController = async (req, res) => {
  const movie = req.body;

  const newMovie = await moviesService.createMovieService(movie);
  res.status(201).send(newMovie);
};

const updateMovieController = async (req, res) => {
  const idParam = req.params.id;
  const movieEdit = req.body;

  const updatedMovie= await moviesService.updateMovieService(idParam, movieEdit)
  res.send(updatedMovie);
};

const deleteMovieController = async (req, res) => {
  const idParam = req.params.id;

  await moviesService.deleteMovieService(idParam);
  res.send({ message: 'Filme deletado com sucesso!' });
};

module.exports = {
  findAllMoviesController,
  findByIdMovieController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
};
