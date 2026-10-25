const { Router } = require('express');
const { getInfo, postSalto } = require('../controllers/paracaidismo.controller');

const router = Router();

router.get('/', getInfo);
router.post('/saltos', postSalto);

module.exports = router;
