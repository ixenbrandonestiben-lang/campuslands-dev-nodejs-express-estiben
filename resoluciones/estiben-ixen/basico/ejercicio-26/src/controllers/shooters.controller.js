const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarPartidas, crearLobbyRanked, cancelarLobby } = require('../services/shooters.service');

function getInfo(req, res) {
  return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
}

function getPartidas(req, res) {
  const lista = listarPartidas();
  return res.status(HTTP_STATUS.OK).json({ ok: true, data: lista });
}

function postLobby(req, res) {
  try {
    const nueva = crearLobbyRanked(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Lobby creado exitosamente', data: nueva });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

function deleteLobby(req, res) {
  try {
    cancelarLobby(req.params.id);
    return res.status(HTTP_STATUS.NO_CONTENT).send();
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.NOT_FOUND).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getPartidas, postLobby, deleteLobby };
