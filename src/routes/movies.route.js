const router = require('express').Router();

const moviesController = require('../controllers/movies.controller');

router.get('/find-movies', moviesController.findMoviesController);
router.get('/find-movie/:id', moviesController.findMovieByIdController);
router.post('/create', moviesController.createMoviesController);
router.put('/update/:id', moviesController.updateMovieController);
router.delete('/delete/:id', moviesController.deleteMovieController);

module.exports = router;

