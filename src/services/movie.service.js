const movies = [
  {
    id: 1,
    titulo: 'A Batalha Esquecida',
    sinopse:
      'Durante a Segunda Guerra, na crucial Batalha do Rio Escalda, três vidas totalmente diferentes se cruzam e cada um vê o conflito sob perspectivas diferentes.',
    img: './assets/img/abatalhaesquecida.jpg',
    ano: 10.0,
  },
  {
    id: 2,
    titulo: 'Alerta Vermelho',
    sinopse:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    img: './assets/img/alertavermelho.jpg',
    ano: 10.0,
  },
  {
    id: 3,
    titulo: 'Amor e Monstros',
    sinopse:
      'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
    img: './assets/img/amoremonstros.jpg',
    ano: 7.0,
  },
];

const findAllMoviesService = () => {
  return movies;
};

const findByIdMovieService = (idParam) => {
  return movies.find((movie) => movie.id === idParam);
};

const createMovieService = (newMovie) => {
  const newId = movies.length + 1;
  newMovie.id = newId;
  movies.push(newMovie);
  return newMovie;
};

const updateMovieService = (id, movieEdited) => {
  movieEdited['id'] = id;
  const movieIndex = movies.findIndex((movie) => movie.id == id);
  movies[movieIndex] = movieEdited;
  return movieEdited;
};

const deleteMovieService = (id) => {
  const movieIndex = movies.findIndex((movie) => movie.id == id);
  return movies.splice(movieIndex, 1);
};

module.exports = {
findAllMoviesService,
findByIdMovieService,
createMovieService,
updateMovieService,
deleteMovieService
};
