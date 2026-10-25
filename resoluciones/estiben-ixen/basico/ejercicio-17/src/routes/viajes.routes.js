const { Router } = require('express');
const { getInfo, getDestinos } = require('../controllers/viajes.controller');

const router = Router();

router.get('/', getInfo);
router.get('/destinos', getDestinos);

module.exports = router;
