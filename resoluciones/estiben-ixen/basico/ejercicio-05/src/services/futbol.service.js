const fs = require('fs/promises');
const path = require('path');
const { HTTP_STATUS } = require('../utils/constants');
const DATA_PATH = path.join(__dirname, '../data/torneo.json');

function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'fs para leer archivos' };
}

async function leerDatosTorneo() {
  const rawData = await fs.readFile(DATA_PATH, 'utf-8');
  return JSON.parse(rawData);
}

module.exports = { obtenerInfoEjercicio, leerDatosTorneo, obtenerEquipos: async () => (await leerDatosTorneo()).equipos };
