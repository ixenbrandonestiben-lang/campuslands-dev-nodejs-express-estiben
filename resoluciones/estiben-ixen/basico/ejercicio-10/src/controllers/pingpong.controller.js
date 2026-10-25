const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, simularSetPingpong } = require('../services/pingpong.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

async function simularPartido(req, res) {
  try {
    const jugador1 = req.query.jugador1 || 'Ma Long';
    const jugador2 = req.query.jugador2 || 'Fan Zhendong';
    const resultado = await simularSetPingpong({ jugador1, jugador2 });
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: resultado });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, simularPartido };
