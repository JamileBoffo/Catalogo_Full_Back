const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const movie = req.body;

  if (!movie || !movie.titulo || !movie.sinopse || !movie.img || !movie.ano) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar um novo filme ao catálogo!',
    });
  }
  next();
};

module.exports = {
    validId, 
    validObjectBody
};
