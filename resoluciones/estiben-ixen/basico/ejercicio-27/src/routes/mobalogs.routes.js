const { Router } = require('express');
const { getInfo, getPartidas } = require('../controllers/mobalogs.controller');

const router = Router();

router.get('/', getInfo);
router.get('/partidas', getPartidas);

module.exports = router;
