const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, resolverConfiguracion } = require('../services/entorno.service');

function getInfo(req, res) {
  return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
}

function getConfig(req, res) {
  const config = resolverConfiguracion();
  return res.status(HTTP_STATUS.OK).json({ ok: true, data: config });
}

module.exports = { getInfo, getConfig };
