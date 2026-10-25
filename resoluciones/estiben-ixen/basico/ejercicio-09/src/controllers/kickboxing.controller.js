const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, leerPeleadores, agregarPeleador } = require('../services/kickboxing.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

async function getPeleadores(req, res) {
  try {
    const data = await leerPeleadores();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: data.length, data });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

async function postPeleador(req, res) {
  try {
    const nuevo = await agregarPeleador(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Peleador registrado exitosamente', data: nuevo });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getPeleadores, postPeleador };
