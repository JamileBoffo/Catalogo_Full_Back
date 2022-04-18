const movies = [
    {
      id: 1,
      titulo: 'A Batalha Esquecida',
      sinopse:
        'Durante a Segunda Guerra, na crucial Batalha do Rio Escalda, três vidas totalmente diferentes se cruzam e cada um vê o conflito sob perspectivas diferentes.',
      img: 'https://github.com/JamileBoffo/Wi-flix/raw/main/public/assets/a-batalha-esquecida.jpg',
      ano: 10.0,
    },
    {
      id: 2,
      titulo: 'Alerta Vermelho',
      sinopse:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      img: 'https://playzuando.com.br/wp-content/uploads/2021/10/alerta-vermelho.png',
      ano: 10.0,
    },
    {
      id: 3,
      titulo: 'Amor e Monstros',
      sinopse:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      img: './assets/amor-e-monstros.png',
      ano: 7.0,
    },
];
  
const findMoviesService = () => {
    return movies;
};
  
const findMoviesByIdService = (id) => {
    return movies.find((movies) => movies.id == id);
};

const createMoviesService = (newMovie) => {
    const newId = movies.length + 1;
    newMovie.id = newId;
    movies.push(newMovie);
    return newMovie;
};

const updateMovieService = (id, movieEdited) => {
    movieEdited['id'] = id;
    const movieIndex = movies.findIndex((movies) => movies.id == id);
    movies[movieIndex] = movieEdited;
    return movieEdited;
};

const deleteMovieService = (id) => {
    const movieIndex = movies.findIndex((movies) => movies.id == id);
    return movies.splice(movieIndex, 1);
};
  
module.exports = {
  findMoviesService,
  findMoviesByIdService,
  createMoviesService,
  updateMovieService,
  deleteMovieService
};
