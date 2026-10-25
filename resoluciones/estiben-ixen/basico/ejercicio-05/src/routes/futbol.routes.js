const { Router } = require('express');
const { getInfo, getTorneo, getEquipos } = require('../controllers/futbol.controller');

const router = Router();

router.get('/', getInfo);
router.get('/torneo', getTorneo);
router.get('/equipos', getEquipos);

module.exports = router;
