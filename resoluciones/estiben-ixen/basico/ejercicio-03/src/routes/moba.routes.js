// Capa de rutas - Definición de endpoints para el ejercicio 03
// Módulos CommonJS
const { Router } = require("express");
const {
  getInfo,
  getHeroes,
  crearPick
} = require("../controllers/moba.controller");

const router = Router();

// Endpoint requerido por la especificación: /basico/ejercicio-03
router.get("/", getInfo);

// Endpoints temáticos adicionales (MOBA esports)
router.get("/heroes", getHeroes);
router.post("/picks", crearPick);

module.exports = router;
