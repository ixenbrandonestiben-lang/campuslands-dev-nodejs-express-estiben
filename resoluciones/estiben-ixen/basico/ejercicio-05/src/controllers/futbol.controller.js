const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, leerDatosTorneo, obtenerEquipos } = require('../services/futbol.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

async function getTorneo(req, res) {
  try {
    const data = await leerDatosTorneo();
    return res.status(HTTP_STATUS.OK).json({ ok: true, data });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

async function getEquipos(req, res) {
  try {
    const { minPuntos } = req.query;
    const equipos = await obtenerEquipos(minPuntos);
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: equipos.length, data: equipos });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getTorneo, getEquipos };
