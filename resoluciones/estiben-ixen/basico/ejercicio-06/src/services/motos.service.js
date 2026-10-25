const path = require('path');
const { HTTP_STATUS } = require('../utils/constants');

function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'path y rutas seguras' };
}

function listarManuales() {
  return [{ id: 'yamaha-mt07', nombre: 'Yamaha MT-07' }];
}

function resolverRutaManualSegura(nombreArchivo) {
  return { rutaSegura: path.resolve(__dirname, '../data', nombreArchivo || 'manual.txt') };
}

module.exports = { obtenerInfoEjercicio, listarManuales, resolverRutaManualSegura };
