const { HTTP_STATUS } = require('../utils/constants');
const {
  obtenerInfoEjercicio,
  crearCompuesto,
  listarCompuestos,
  obtenerCompuestoPorId,
  actualizarCompuesto,
  eliminarCompuesto
} = require('../services/quimica.service');

function getInfo(req, res) {
  return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
}

function getAll(req, res) {
  return res.status(HTTP_STATUS.OK).json({ ok: true, total: listarCompuestos().length, data: listarCompuestos() });
}

function getById(req, res) {
  try {
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: obtenerCompuestoPorId(req.params.id) });
  } catch (e) {
    return res.status(e.statusCode || 400).json({ ok: false, message: e.message });
  }
}

function postCreate(req, res) {
  try {
    const nuevo = crearCompuesto(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Compuesto químico creado', data: nuevo });
  } catch (e) {
    return res.status(e.statusCode || 400).json({ ok: false, message: e.message });
  }
}

function putUpdate(req, res) {
  try {
    const actualizado = actualizarCompuesto(req.params.id, req.body || {});
    return res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Compuesto químico actualizado', data: actualizado });
  } catch (e) {
    return res.status(e.statusCode || 400).json({ ok: false, message: e.message });
  }
}

function deleteRemove(req, res) {
  try {
    const eliminado = eliminarCompuesto(req.params.id);
    return res.status(HTTP_STATUS.OK).json({ ok: true, message: 'Compuesto químico eliminado', data: eliminado });
  } catch (e) {
    return res.status(e.statusCode || 400).json({ ok: false, message: e.message });
  }
}

module.exports = { getInfo, getAll, getById, postCreate, putUpdate, deleteRemove };
