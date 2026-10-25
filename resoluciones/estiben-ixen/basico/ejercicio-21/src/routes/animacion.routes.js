const { Router } = require('express');
const { getInfo, getProyectos, getProyectoById } = require('../controllers/animacion.controller');

const router = Router();

router.get('/', getInfo);
router.get('/proyectos', getProyectos);
router.get('/proyectos/:id', getProyectoById);

module.exports = router;
