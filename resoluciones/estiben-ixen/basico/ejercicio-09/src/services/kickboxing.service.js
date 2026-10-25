const fs = require('fs/promises');
const path = require('path');
const DATA_FILE = path.join(__dirname, '../data/peleadores.json');

function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'JSON y persistencia simple' };
}
async function leerPeleadores() { return JSON.parse(await fs.readFile(DATA_FILE, 'utf-8')); }
module.exports = { obtenerInfoEjercicio, leerPeleadores, agregarPeleador: async (p) => p };
