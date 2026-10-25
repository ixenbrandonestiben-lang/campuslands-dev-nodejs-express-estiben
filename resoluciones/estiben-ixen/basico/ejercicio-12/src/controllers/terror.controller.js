const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, obtenerPeliculas, obtenerEstadisticasTerror } = require('../services/terror.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

async function getPeliculas(req, res) {
  try {
    const { minCalificacion } = req.query;
    const peliculas = await obtenerPeliculas(minCalificacion);
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: peliculas.length, data: peliculas });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

async function getEstadisticas(req, res) {
  try {
    const stats = await obtenerEstadisticasTerror();
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: stats });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getPeliculas, getEstadisticas };
