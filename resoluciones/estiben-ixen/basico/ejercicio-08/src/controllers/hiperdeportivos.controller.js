const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, obtenerConfiguracionEntorno, listarHiperdeportivos } = require('../services/hiperdeportivos.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getConfig(req, res) {
  try {
    const config = obtenerConfiguracionEntorno();
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: config });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getModelos(req, res) {
  try {
    const modelos = listarHiperdeportivos();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: modelos.length, data: modelos });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getConfig, getModelos };
