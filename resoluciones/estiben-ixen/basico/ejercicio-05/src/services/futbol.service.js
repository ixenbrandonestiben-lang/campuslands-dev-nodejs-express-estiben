const fs = require('fs/promises');
const path = require('path');
const { HTTP_STATUS } = require('../utils/constants');

const DATA_PATH = path.join(__dirname, '../data/torneo.json');

/**
 * Retorna estado y tema del ejercicio 05
 */
function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'fs para leer archivos'
  };
}

/**
 * Lee y parsea de forma asíncrona el archivo JSON del torneo
 */
async function leerDatosTorneo() {
  try {
    const rawData = await fs.readFile(DATA_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    const err = new Error('No se pudo leer el archivo de datos del torneo');
    err.statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    throw err;
  }
}

/**
 * Obtiene los equipos registrados con filtro opcional de puntos mínimos
 */
async function obtenerEquipos(minPuntos = 0) {
  const data = await leerDatosTorneo();
  const filtroPuntos = Number(minPuntos) || 0;
  return data.equipos.filter(eq => eq.puntos >= filtroPuntos);
}

module.exports = {
  obtenerInfoEjercicio,
  leerDatosTorneo,
  obtenerEquipos
};
