const movies = [
  {
    id: 1,
    titulo: 'A Batalha Esquecida',
    sinopse:
      'Durante a Segunda Guerra, na crucial Batalha do Rio Escalda, três vidas totalmente diferentes se cruzam e cada um vê o conflito sob perspectivas diferentes.',
    img: './assets/img/abatalhaesquecida.jpg',
    ano: 2020,
  },
  {
    id: 2,
    titulo: 'Alerta Vermelho',
    sinopse:
      'Um alerta vermelho da Interpol é emitido e o agente do FBI John Hartley assume o caso. Durante sua busca, ele se vê diante de um assalto ousado e é forçado a se aliar ao maior ladrão de arte da história, Nolan Booth, para capturar a ladra de arte mais procurada do mundo atualmente, Sarah Black.',
    img: './assets/img/alertavermelho.jpg',
    ano: 2021,
  },
  {
    id: 3,
    titulo: 'Amor e Monstros',
    sinopse:
      'Sete anos após sobreviver ao apocalipse dos monstros, o azarado Joel Dawson decide se arriscar e abandona o seu bunker para se reencontrar com a sua ex-namorada da escola, Aimee.',
    img: './assets/img/amoremonstros.jpg',
    ano: 2020,
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
