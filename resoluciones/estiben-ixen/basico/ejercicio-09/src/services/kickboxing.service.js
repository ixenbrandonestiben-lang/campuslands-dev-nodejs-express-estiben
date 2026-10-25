const fs = require('fs/promises');
const path = require('path');
const { HTTP_STATUS } = require('../utils/constants');

const DATA_FILE = path.join(__dirname, '../data/peleadores.json');

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'JSON y persistencia simple'
  };
}

async function leerPeleadores() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function guardarPeleadores(peleadores) {
  await fs.writeFile(DATA_FILE, JSON.stringify(peleadores, null, 2), 'utf-8');
}

async function agregarPeleador({ nombre, division, record, victoriasKo }) {
  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    const err = new Error("El campo 'nombre' es requerido");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  if (!division || typeof division !== 'string' || !division.trim()) {
    const err = new Error("El campo 'division' es requerido");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const peleadores = await leerPeleadores();
  const nuevo = {
    id: peleadores.length > 0 ? Math.max(...peleadores.map(p => p.id)) + 1 : 1,
    nombre: nombre.trim(),
    division: division.trim(),
    record: record && typeof record === 'string' ? record.trim() : '0-0-0',
    victoriasKo: Number(victoriasKo) || 0
  };

  peleadores.push(nuevo);
  await guardarPeleadores(peleadores);
  return nuevo;
}

module.exports = {
  obtenerInfoEjercicio,
  leerPeleadores,
  agregarPeleador
};
