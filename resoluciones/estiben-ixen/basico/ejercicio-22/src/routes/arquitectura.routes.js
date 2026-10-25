const { Router } = require('express');
const { getInfo, getPlanos, postCotizar } = require('../controllers/arquitectura.controller');

const router = Router();

router.get('/', getInfo);
router.get('/planos', getPlanos);
router.post('/cotizar', postCotizar);

module.exports = router;
