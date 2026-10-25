const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarMenu, ordenarPlato } = require('../services/comida.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getMenu(req, res) {
  try {
    const { categoria } = req.query;
    const menu = listarMenu(categoria);
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: menu.length, data: menu });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function postOrden(req, res) {
  try {
    const orden = ordenarPlato(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Orden generada con éxito', data: orden });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getMenu, postOrden };
