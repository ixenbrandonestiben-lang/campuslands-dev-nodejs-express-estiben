const { Router } = require('express');
const { getInfo, getPartidas, postLobby, deleteLobby } = require('../controllers/shooters.controller');

const router = Router();

router.get('/', getInfo);
router.get('/partidas', getPartidas);
router.post('/lobbies', postLobby);
router.delete('/lobbies/:id', deleteLobby);

module.exports = router;
