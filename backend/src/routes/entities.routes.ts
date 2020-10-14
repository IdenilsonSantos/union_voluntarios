import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import entitiesController from '../controller/EntitiesController';

const router = Router();
const upload = multer(uploadConfig);

router.get('/', entitiesController.index);
router.get('/:id', entitiesController.show);
router.post('/', upload.array('images'), entitiesController.create);

export default router;