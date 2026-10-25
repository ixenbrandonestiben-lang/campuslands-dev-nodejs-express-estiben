const { Router } = require('express');
const { getInfo, getAll, getById, postCreate, putUpdate, deleteRemove } = require('../controllers/quimica.controller');

const router = Router();

router.get('/', getInfo);
router.get('/compuestos', getAll);
router.get('/compuestos/:id', getById);
router.post('/compuestos', postCreate);
router.put('/compuestos/:id', putUpdate);
router.delete('/compuestos/:id', deleteRemove);

module.exports = router;
