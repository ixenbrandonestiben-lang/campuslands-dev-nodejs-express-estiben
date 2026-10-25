const { Router } = require('express');
const { getInfo, getTrabajos, postTrabajo } = require('../controllers/soldadura.controller');

const router = Router();

router.get('/', getInfo);
router.get('/trabajos', getTrabajos);
router.post('/trabajos', postTrabajo);

module.exports = router;
