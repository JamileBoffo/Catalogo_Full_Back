const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const router = require('./src/routes/movies.route');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use('/movies', router);
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

