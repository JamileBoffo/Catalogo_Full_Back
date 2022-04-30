import mongoose from 'mongoose';
import { validId, validObjectBody } from '../middlewares/potion.middleware';
import potionsService from '../services/potion.service';

export const findAllPotionsController = async (req, res) => {
  const potions =  await potionsService.findAllPotionsService();

  if(potions.lenght == 0){
    return res.status(400).send({ message: 'Não existem filmes cadastrados' })
  }

  res.send(potions);
};

export const findByIdPotionController = async (req, res) => {
  const idParam = req.params.id;

  const chosenPotion = await potionsService.findByIdPotionService(idParam);

  if(!chosenPotion) {
    return req.status(400).send({message: 'Filme não encontrado' });
  }
  res.send(chosenPotion);
};

export const createPotionController = async (req, res) => {
  const potion = req.body;

  const newPotion = await potionsService.createPotionService(potion);
  res.status(201).send(newPotion);
};

export const updatePotionController = async (req, res) => {
  const idParam = req.params.id;
  const potionEdit = req.body;

  const updatedPotion= await potionsService.updatePotionService(idParam, potionEdit)
  res.send(updatedPotion);
};

export const deletePotionController = async (req, res) => {
  const idParam = req.params.id;

  await potionsService.deletePotionService(idParam);
  res.send({ message: 'Filme deletado com sucesso!' });
};

