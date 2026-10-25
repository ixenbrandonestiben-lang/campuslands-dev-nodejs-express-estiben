const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarMisiones } = require('../services/rpg.service');

function responseWrapper(res, status, ok, message, data = null) {
  return res.status(status).json({
    ok,
    timestamp: new Date().toISOString(),
    message,
    ...(data !== null ? { data } : {})
  });
}

function getInfo(req, res) {
  return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
}

function getMisiones(req, res) {
  try {
    const { rango } = req.query;
    const misiones = listarMisiones(rango);
    return responseWrapper(res, HTTP_STATUS.OK, true, 'Misiones obtenidas exitosamente', misiones);
  } catch (error) {
    return responseWrapper(res, HTTP_STATUS.INTERNAL_SERVER_ERROR, false, error.message);
  }
}

module.exports = { getInfo, getMisiones };
