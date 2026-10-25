const { Router } = require('express');
const { getInfo, getCanciones, getCancionById } = require('../controllers/musica.controller');

const router = Router();

router.get('/', getInfo);
router.get('/canciones', getCanciones);
router.get('/canciones/:id', getCancionById);

module.exports = router;
