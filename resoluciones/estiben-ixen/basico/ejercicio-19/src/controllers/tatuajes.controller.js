const { HTTP_STATUS } = require('../utils/constants');
const { obtenerInfoEjercicio, buscarTatuajesPorEstiloYFiltros } = require('../services/tatuajes.service');

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ ok: false, message: error.message });
  }
}

function getPorEstilo(req, res) {
  try {
    const { estilo } = req.params;
    const resultado = buscarTatuajesPorEstiloYFiltros(estilo, req.query);
    return res.status(HTTP_STATUS.OK).json({ ok: true, data: resultado });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({ ok: false, message: error.message });
  }
}

module.exports = { getInfo, getPorEstilo };
