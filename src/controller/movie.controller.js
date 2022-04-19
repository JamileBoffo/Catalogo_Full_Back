const moviesService = require('../services/movie.service');

const findAllMoviesController = (req, res) => {
  const movies = moviesService.findAllMoviesService();
  res.send(movies);
};

const findByIdMovieController = (req, res) => {
  const idParam = Number(req.params.id);
  if (!idParam) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }
  const chosenMovie = moviesService.findByIdMovieService(idParam);
  res.send(chosenMovie);
};

const createMovieController = (req, res) => {
  const movie = req.body;

  if (!movie || !movie.titulo || !movie.sinopse || !movie.img || !movie.ano) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar um novo filme ao catálogo!',
    });
  }

  const newMovie = moviesService.createMovieService(movie);
  res.send(newMovie);
};

const updateMovieController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }
  const movieEdit = req.body;

  if (
    !movieEdit ||
    !movieEdit.titulo ||
    !movieEdit.sinopse ||
    !movieEdit.img ||
    !movieEdit.ano
  ) {
    return res
    .status(400)
    .send({ message: 'Você não preencheu todos os dados para editar o filme!' });
  }
  const updatedMovie = moviesService.updateMovieService(idParam, movieEdit);
  res.send(updatedMovie);
};

const deleteMovieController = (req, res) => {
  const idParam = Number(req.params.id);

  if (!idParam) {
    return res.status(400).send({ message: 'Filme não encontrado!' });
  }
  moviesService.deleteMovieService(idParam);
  res.send({ message: 'Filme deletado com sucesso!' });
};

module.exports = {
  findAllMoviesController,
  findByIdMovieController,
  createMovieController,
  updateMovieController,
  deleteMovieController,
};
