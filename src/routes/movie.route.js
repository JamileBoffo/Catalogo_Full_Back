const router = require('express').Router();
const { validId, validObjectBody } = require('../middlewares/movie.middleware')

const controllerMovies = require('../controllers/movie.controller');

router.get('/find-movies', controllerMovies.findAllMoviesController);
router.get('/movie/:id', validId, controllerMovies.findByIdMovieController);
router.post('/create', validObjectBody, controllerMovies.createMovieController);
router.put('/update/:id', validId, validObjectBody, controllerMovies.updateMovieController);
router.delete('/delete/:id', validId, controllerMovies.deleteMovieController);

module.exports = router;
