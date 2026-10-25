// Capa de controladores - Comunicación entre peticiones HTTP y servicios de negocio
// Módulos CommonJS utilizando require
const {
  obtenerInfoEjercicio,
  listarHeroes,
  buscarHeroePorId,
  registrarPick
} = require("../services/moba.service");

function getInfo(req, res) {
  try {
    const info = obtenerInfoEjercicio();
    return res.status(200).json(info);
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      ok: false,
      message: error.message || "Error al obtener información del ejercicio"
    });
  }
}

function getHeroes(req, res) {
  try {
    const { rol } = req.query;
    const heroes = listarHeroes(rol);
    return res.status(200).json({
      ok: true,
      total: heroes.length,
      filtro: rol || "todos",
      data: heroes
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      ok: false,
      message: error.message
    });
  }
}

function getHeroeById(req, res) {
  try {
    const { id } = req.params;
    const heroe = buscarHeroePorId(id);
    return res.status(200).json({
      ok: true,
      data: heroe
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      ok: false,
      message: error.message
    });
  }
}

function crearPick(req, res) {
  try {
    const { equipo, rol, nombreHeroe } = req.body || {};
    const nuevoPick = registrarPick({ equipo, rol, nombreHeroe });
    return res.status(201).json({
      ok: true,
      message: "Pick registrado exitosamente para la partida MOBA",
      data: nuevoPick
    });
  } catch (error) {
    return res.status(error.statusCode || 400).json({
      ok: false,
      message: error.message
    });
  }
}

module.exports = {
  getInfo,
  getHeroes,
  getHeroeById,
  crearPick
};
