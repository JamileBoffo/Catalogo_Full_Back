const moviesService = require('../services/movies.service');

const findMoviesController = (req, res) => {
  const allMovies = moviesService.findMoviesService();
  res.send(allMovies);
};

const findMovieByIdController = (req, res) => {
  const idParam = req.params.id;
  if (!idParam) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }
  const chosenMovie = moviesService.findMoviesByIdService(idParam);
  res.send(chosenMovie);
};

const createMoviesController = (req, res) => {
  if (
    !movies ||
    !movies.titulo ||
    !movies.sinopse ||
    !movies.img ||
    !movies.ano
  ) {
    return res
      .status(400)
      .send({
        mensagem:
          'Você naõ preencheu todos os dados para adicionar um novo filme ao catálogo!',
      });
  }
  const movies = req.body;
  const newMovie = moviesService.createMoviesService(movies);
  res.send(newMovie);
};

const updateMovieController = (req, res) => {
  const idParam = +req.params.id;
  const moviesEdit = req.body;
  if (!idParam) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }
  if (
    !moviesEdit ||
    !moviesEdit.sabor ||
    !moviesEdit.descricao ||
    !moviesEdit.foto ||
    !moviesEdit.preco
  ) {
    return res
      .status(400)
      .send({
        message: 'Você não preencheu todos os dados para editar o filme!',
      });
  }
  const updatedMovie = moviesService.updateMovieService(idParam, moviesEdit);
  res.send(updatedMovie);
};

const deleteMovieController = (req, res) => {
  const idParam = req.params.id;
  if (!idParam) {
    return res.status(404).send({ message: 'Filme não encontrado!' });
  }
  moviesService.deleteMovieService(idParam);
  res.send({ message: 'Filme deletado com sucesso!' });
};

module.exports = {
  findMoviesController,
  findMovieByIdController,
  createMoviesController,
  updateMovieController,
  deleteMovieController,
};
