const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarTorneos } = require('../services/docfutbol.service');

function getInfo(req, res) {
  return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
}

function getTorneos(req, res) {
  const torneos = listarTorneos();
  return res.status(HTTP_STATUS.OK).json({ ok: true, total: torneos.length, data: torneos });
}

module.exports = { getInfo, getTorneos };
