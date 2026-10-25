const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, registrarSalto } = require('../services/paracaidismo.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function postSalto(req, res) {
  try {
    const reserva = registrarSalto(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Salto reservado con éxito', data: reserva });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, postSalto };
