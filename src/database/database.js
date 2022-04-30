import mongoose from 'mongoose';

export function connectToDatabase() {
  mongoose
    .connect('mongodb://localhost:27017/potions-db', {
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
