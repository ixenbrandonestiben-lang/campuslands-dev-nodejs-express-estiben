const { Router } = require('express');
const { getInfo, postLienzo } = require('../controllers/digitalart.controller');

const router = Router();

router.get('/', getInfo);
router.post('/lienzos', postLienzo);

module.exports = router;
