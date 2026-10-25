const { Router } = require('express');
const { getInfo, getManuales, resolverRuta } = require('../controllers/motos.controller');

const router = Router();

router.get('/', getInfo);
router.get('/manuales', getManuales);
router.get('/resolver-ruta', resolverRuta);

module.exports = router;
