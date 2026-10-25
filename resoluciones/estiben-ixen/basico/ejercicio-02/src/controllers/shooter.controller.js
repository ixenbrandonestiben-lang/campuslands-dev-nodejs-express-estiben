const { HTTP_STATUS } = require("../utils/constants");
const {
  obtenerInfoEjercicio,
  listarLoadouts,
  buscarLoadoutPorId,
  registrarLoadout
} = require("../services/shooter.service");

function getInfo(req, res) {
  try {
    return res.status(HTTP_STATUS.OK).json(obtenerInfoEjercicio());
  } catch (err) {
    return res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: err.message
    });
  }
}

function getLoadouts(req, res) {
  try {
    const items = listarLoadouts();
    return res.status(HTTP_STATUS.OK).json({
      ok: true,
      total: items.length,
      data: items
    });
  } catch (err) {
    return res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: err.message
    });
  }
}

function getLoadoutById(req, res) {
  try {
    const item = buscarLoadoutPorId(req.params.id);
    return res.status(HTTP_STATUS.OK).json({
      ok: true,
      data: item
    });
  } catch (err) {
    return res.status(err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      ok: false,
      message: err.message
    });
  }
}

function postLoadout(req, res) {
  try {
    const item = registrarLoadout(req.body || {});
    return res.status(HTTP_STATUS.CREATED).json({
      ok: true,
      message: "Loadout creado exitosamente",
      data: item
    });
  } catch (err) {
    return res.status(err.statusCode || HTTP_STATUS.BAD_REQUEST).json({
      ok: false,
      message: err.message
    });
  }
}

module.exports = {
  getInfo,
  getLoadouts,
  getLoadoutById,
  postLoadout
};
