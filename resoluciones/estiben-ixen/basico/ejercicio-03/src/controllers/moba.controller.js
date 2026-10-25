// Capa de controladores - Comunicación entre peticiones HTTP y servicios de negocio
// Módulos CommonJS utilizando require
const {
  obtenerInfoEjercicio,
  listarHeroes,
  registrarPick
} = require("../services/moba.service");

function getInfo(req, res) {
  const info = obtenerInfoEjercicio();
  return res.status(200).json(info);
}

function getHeroes(req, res) {
  const heroes = listarHeroes();
  return res.status(200).json({
    ok: true,
    total: heroes.length,
    data: heroes
  });
}

function crearPick(req, res) {
  const { equipo, rol, nombreHeroe } = req.body;
  const nuevoPick = registrarPick({ equipo, rol, nombreHeroe });
  return res.status(201).json({
    ok: true,
    message: "Pick registrado exitosamente para la partida MOBA",
    data: nuevoPick
  });
}

module.exports = {
  getInfo,
  getHeroes,
  crearPick
};
