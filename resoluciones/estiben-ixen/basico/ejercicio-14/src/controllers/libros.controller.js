const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, listarLibros, validarYRegistrarLibro } = require('../services/libros.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getLibros(req, res) {
  try {
    const libros = listarLibros();
    return res.status(HTTP_STATUS.OK).json({ ok: true, total: libros.length, data: libros });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function postLibro(req, res) {
  try {
    const nuevo = validarYRegistrarLibro(req.body);
    return res.status(HTTP_STATUS.CREATED).json({ ok: true, message: 'Libro validado y registrado exitosamente', data: nuevo });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getLibros, postLibro };
