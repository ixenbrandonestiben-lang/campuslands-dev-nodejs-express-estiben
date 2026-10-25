const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarManuales, resolverRutaManualSegura } = require('../services/motos.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getManuales(req, res) {
  try {
    const lista = listarManuales();
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: lista });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function resolverRuta(req, res) {
  try {
    const { archivo } = req.query;
    const resultado = resolverRutaManualSegura(archivo);
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: resultado });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getManuales, resolverRuta };
