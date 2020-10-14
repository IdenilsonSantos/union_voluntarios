import { Router } from 'express';
import entitiesRoutes from './entities.routes';

const router = Router();

router.use('/entities', entitiesRoutes);

export default router;