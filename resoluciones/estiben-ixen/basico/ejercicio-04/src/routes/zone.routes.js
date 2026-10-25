// Capa de rutas - Battle Royale (ES Modules)
import { Router } from 'express';
import { getInfo, getZonas, postReducir } from '../controllers/zone.controller.js';

const router = Router();

router.get('/', getInfo);
router.get('/zonas', getZonas);
router.post('/reducir', postReducir);

export default router;
