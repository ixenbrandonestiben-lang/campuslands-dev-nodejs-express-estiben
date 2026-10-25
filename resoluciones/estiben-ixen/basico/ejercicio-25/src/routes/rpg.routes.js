const { Router } = require('express');
const { getInfo, getMisiones } = require('../controllers/rpg.controller');

const router = Router();

router.get('/', getInfo);
router.get('/misiones', getMisiones);

module.exports = router;
