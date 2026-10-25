const { Router } = require('express');
const { getInfo, simularPartido } = require('../controllers/pingpong.controller');

const router = Router();

router.get('/', getInfo);
router.get('/simular-partido', simularPartido);

module.exports = router;
