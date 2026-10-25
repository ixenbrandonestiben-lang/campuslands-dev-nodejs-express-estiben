const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarProyectos, buscarProyectoPorId } = require('../services/animacion.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getProyectos(req, res) {
  try {
    const data = listarProyectos();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: data.length, data });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getProyectoById(req, res) {
  try {
    const { id } = req.params;
    const proyecto = buscarProyectoPorId(id);
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: proyecto });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getProyectos, getProyectoById };
