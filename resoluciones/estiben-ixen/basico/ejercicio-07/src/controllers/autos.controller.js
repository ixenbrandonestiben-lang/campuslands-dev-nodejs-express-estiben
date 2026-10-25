const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, obtenerInfoCLI, filtrarAutos } = require('../services/autos.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getCliInfo(req, res) {
  try {
    const cli = obtenerInfoCLI();
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: cli });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getAutos(req, res) {
  try {
    const { marca } = req.query;
    const autos = filtrarAutos(marca);
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: autos.length, data: autos });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getCliInfo, getAutos };
