const express = require('express');
const cors = require('cors');

const router = require('./src/routes/movie.route');

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/movies', router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
