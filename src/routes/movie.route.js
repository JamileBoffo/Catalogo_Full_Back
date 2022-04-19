const router = require('express').Router();

const controllerMovies = require('../controllers/movie.controller');

router.get('/find-movies', controllerMovies.findAllMoviesController);
router.get('/movie/:id', controllerMovies.findByIdMovieController);
router.post('/create', controllerMovies.createMovieController);
router.put('/update/:id', controllerMovies.updateMovieController);
router.delete('/delete/:id', controllerMovies.deleteMovieController);

module.exports = router;
