const { Router } = require('express');
const { getInfo, getOrdenes, postOrden, patchEstado } = require('../controllers/taller.controller');

const router = Router();

router.get('/', getInfo);
router.get('/ordenes', getOrdenes);
router.post('/ordenes', postOrden);
router.patch('/ordenes/:id/estado', patchEstado);

module.exports = router;
