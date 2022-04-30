import router from 'express.Router()';
import { validId, validObjectBody } from '../middlewares/potion.middleware';
import controllerPotions from '../controllers/movie.controller';

router.get('/find-potions', controllerPotions.findAllPotionsController);
router.get('/one-potion/:id', validId, controllerPotions.findByIdPotionController);
router.post('/create-potion', validObjectBody, controllerPotions.createPotionController);
router.put('/update-potion/:id', validId, validObjectBody, controllerPotions.updatePotionController);
router.delete('/delete-potion/:id', validId, controllerPotions.deletePotionController);

module.exports = router;
