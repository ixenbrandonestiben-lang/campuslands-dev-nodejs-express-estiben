const { Router } = require('express');
const { getInfo, getNaves, getNaveById } = require('../controllers/scifi.controller');

const router = Router();

router.get('/', getInfo);
router.get('/naves', getNaves);
router.get('/naves/:id', getNaveById);

module.exports = router;
