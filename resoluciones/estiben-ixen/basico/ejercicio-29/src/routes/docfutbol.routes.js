const { Router } = require('express');
const { getInfo, getTorneos } = require('../controllers/docfutbol.controller');

const router = Router();

router.get('/', getInfo);
router.get('/torneos', getTorneos);

module.exports = router;
