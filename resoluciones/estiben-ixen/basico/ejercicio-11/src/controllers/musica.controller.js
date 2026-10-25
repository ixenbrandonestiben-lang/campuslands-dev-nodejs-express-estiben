const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, cargarCanciones, buscarCancionPorId } = require('../services/musica.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getCanciones(req, res) {
  const { genero } = req.query;
  cargarCanciones(genero)
    .then(data => res.status(HTTP_STATUS.OK).json({ ok: true, total: data.length, data }))
    .catch(error => res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message }));
}

function getCancionById(req, res) {
  const { id } = req.params;
  buscarCancionPorId(id)
    .then(data => res.status(HTTP_STATUS.OK).json({ ok: true, data }))
    .catch(error => res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message }));
}

module.exports = { getInfo, getCanciones, getCancionById };
