const { Router } = require('express');
const { getInfo, getCliInfo, getAutos } = require('../controllers/autos.controller');

const router = Router();

router.get('/', getInfo);
router.get('/cli-info', getCliInfo);
router.get('/autos', getAutos);

module.exports = router;
