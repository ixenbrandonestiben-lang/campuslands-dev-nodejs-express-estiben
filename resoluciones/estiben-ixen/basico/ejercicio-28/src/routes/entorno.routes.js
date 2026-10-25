const { Router } = require('express');
const { getInfo, getConfig } = require('../controllers/entorno.controller');

const router = Router();

router.get('/', getInfo);
router.get('/servidor-config', getConfig);

module.exports = router;
