const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/movies-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Mongo funcionando');
    })
    .catch((err) => {
      return console.log(`Erro na conexão como DB: ${err}`);
    });
}

module.exports = connectToDatabase;
