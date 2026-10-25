const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarDrops } = require('../services/sneakers.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getDrops(req, res) {
  try {
    const drops = listarDrops();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: drops.length, data: drops });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getDrops };
