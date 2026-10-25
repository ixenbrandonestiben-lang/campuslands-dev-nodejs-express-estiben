const { Router } = require('express');
const { getInfo, getPeleadores, postPeleador } = require('../controllers/kickboxing.controller');

const router = Router();

router.get('/', getInfo);
router.get('/peleadores', getPeleadores);
router.post('/peleadores', postPeleador);

module.exports = router;
