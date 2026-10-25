const { Router } = require('express');
const { getInfo, getPorEstilo } = require('../controllers/tatuajes.controller');

const router = Router();

router.get('/', getInfo);
router.get('/estilos/:estilo', getPorEstilo);

module.exports = router;
