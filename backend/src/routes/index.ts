import express from 'express';
import entitiesRoutes from './entities.routes';

const router = express.Router();

router.use('/entities', entitiesRoutes);

export default router;