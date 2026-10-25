const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarTrabajosMemoria, registrarTrabajoMemoria } = require('../services/soldadura.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getTrabajos(req, res) {
  try {
    const lista = listarTrabajosMemoria();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: lista.length, data: lista });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function postTrabajo(req, res) {
  try {
    const nuevo = registrarTrabajoMemoria(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Trabajo registrado en memoria', data: nuevo });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getTrabajos, postTrabajo };
