const { Router } = require('express');
const { getInfo, getLibros, postLibro } = require('../controllers/libros.controller');

const router = Router();

router.get('/', getInfo);
router.get('/libros', getLibros);
router.post('/libros', postLibro);

module.exports = router;
