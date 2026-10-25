// Capa de controladores - Battle Royale (ES Modules)
import { HTTP_STATUS } from '../utils/constants.js';
import { obtenerInfoEjercicio, listarZonasSeguras, reducirZona } from '../services/zone.service.js';

export function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(HTTP_STATUS.OK).json(info);
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: error.message
    });
  }
}

export function getZonas(req, res) {
  try {
    const zonas = listarZonasSeguras();
    return res.status(HTTP_STATUS.OK).json({
      ok: true,
      total: zonas.length,
      data: zonas
    });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: error.message
    });
  }
}

export function postReducir(req, res) {
  try {
    const { mapa, nuevoRadio } = req.body || {};
    const resultado = reducirZona({ mapa, nuevoRadio });
    return res.status(HTTP_STATUS.CREATED).json({
      ok: true,
      message: 'Zona segura reducida exitosamente',
      data: resultado
    });
  } catch (error) {
    return res.status(error.statusCode || HTTP_STATUS.BAD_REQUEST).json({
      ok: false,
      message: error.message
    });
  }
}
