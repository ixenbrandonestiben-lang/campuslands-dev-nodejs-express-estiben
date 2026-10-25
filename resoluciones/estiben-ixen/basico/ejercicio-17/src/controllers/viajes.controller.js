const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarDestinos } = require('../services/viajes.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getDestinos(req, res) {
  try {
    const destinos = listarDestinos(req.query);
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: destinos.length, data: destinos });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getDestinos };
