const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, procesarLienzoDigital } = require('../services/digitalart.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function postLienzo(req, res) {
  try {
    const lienzo = procesarLienzoDigital(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Lienzo digital configurado correctamente', data: lienzo });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, postLienzo };
