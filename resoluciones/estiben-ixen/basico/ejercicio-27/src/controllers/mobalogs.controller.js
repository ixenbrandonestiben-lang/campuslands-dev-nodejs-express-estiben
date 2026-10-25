const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarPartidasTorneo } = require('../services/mobalogs.service');

function getInfo(req, res) {
  return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
}

function getPartidas(req, res) {
  const partidas = listarPartidasTorneo();
  return res.status(HTTP_STATUS.OK).json({ ok: true, data: partidas });
}

module.exports = { getInfo, getPartidas };
