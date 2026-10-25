const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarPlanos, calcularPresupuestoEstimado } = require('../services/arquitectura.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getPlanos(req, res) {
  try {
    const planos = listarPlanos();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: planos.length, data: planos });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function postCotizar(req, res) {
  try {
    const cotizacion = calcularPresupuestoEstimado(req.body || {});
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: cotizacion });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getPlanos, postCotizar };
