const { Router } = require('express');
const { getInfo, getPeliculas, getEstadisticas } = require('../controllers/terror.controller');

const router = Router();

router.get('/', getInfo);
router.get('/peliculas', getPeliculas);
router.get('/estadisticas', getEstadisticas);

module.exports = router;
