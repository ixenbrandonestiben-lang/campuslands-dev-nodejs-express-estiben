const { HTTP_STATUS } = require('../utils/constants');
const {
  obtenerInfoEjercicio,
  listarOrdenes,
  crearOrden,
  actualizarEstadoOrden
} = require('../services/taller.service');

function getInfo(req, res) {
  return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
}

function getOrdenes(req, res) {
  const { estado } = req.query;
  const data = listarOrdenes(estado);
  return res.status(HTTP_STATUS.OK).json({ ok: true, total: data.length, data });
}

function postOrden(req, res) {
  try {
    const nueva = crearOrden(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Orden de reparación creada', data: nueva });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

function patchEstado(req, res) {
  try {
    const { estado } = req.body || {};
    const actualizada = actualizarEstadoOrden(req.params.id, estado);
    return res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Estado de orden actualizado', data: actualizada });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getOrdenes, postOrden, patchEstado };
