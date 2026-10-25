const { Router } = require('express');
const { getInfo, getMenu, postOrden } = require('../controllers/comida.controller');

const router = Router();

router.get('/', getInfo);
router.get('/menu', getMenu);
router.post('/ordenar', postOrden);

module.exports = router;
