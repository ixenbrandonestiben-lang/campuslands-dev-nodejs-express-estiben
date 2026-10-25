const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarNaves, buscarNavePorId } = require('../services/scifi.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getNaves(req, res) {
  try {
    const naves = listarNaves();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: naves.length, data: naves });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getNaveById(req, res) {
  try {
    const { id } = req.params;
    const nave = buscarNavePorId(id);
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: nave });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getNaves, getNaveById };
