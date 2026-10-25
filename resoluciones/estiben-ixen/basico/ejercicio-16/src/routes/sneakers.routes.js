const { Router } = require('express');
const { getInfo, getDrops } = require('../controllers/sneakers.controller');

const router = Router();

router.get('/', getInfo);
router.get('/drops', getDrops);

module.exports = router;
