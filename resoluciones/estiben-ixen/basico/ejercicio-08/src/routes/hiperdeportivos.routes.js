const { Router } = require('express');
const { getInfo, getConfig, getModelos } = require('../controllers/hiperdeportivos.controller');

const router = Router();

router.get('/', getInfo);
router.get('/config', getConfig);
router.get('/modelos', getModelos);

module.exports = router;
