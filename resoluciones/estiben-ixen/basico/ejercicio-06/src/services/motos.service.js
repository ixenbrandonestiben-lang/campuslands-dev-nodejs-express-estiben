const path = require('path');
const { HTTP_STATUS } = require('../utils/constants');

const BASE_MANUALS_DIR = path.resolve(__dirname, '../data/manuales');

const MANUALES_MOTO = [
  { id: 'yamaha-mt07', nombre: 'Yamaha MT-07', cilindraje: '689cc', archivo: 'yamaha-mt07.txt' },
  { id: 'kawasaki-z900', nombre: 'Kawasaki Z900', cilindraje: '948cc', archivo: 'kawasaki-z900.txt' },
  { id: 'honda-cbr600', nombre: 'Honda CBR 600RR', cilindraje: '599cc', archivo: 'honda-cbr600.txt' }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'path y rutas seguras'
  };
}

function listarManuales() {
  return MANUALES_MOTO.map(m => ({ id: m.id, nombre: m.nombre, cilindraje: m.cilindraje }));
}

function resolverRutaManualSegura(nombreArchivo) {
  if (!nombreArchivo || typeof nombreArchivo !== 'string') {
    const error = new Error("El parámetro 'nombreArchivo' es obligatorio");
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  // Prevención de Directory Traversal
  const rutaNormalizada = path.normalize(nombreArchivo).replace(/^[\\/]+/, '');
  if (rutaNormalizada.includes('..') || path.isAbsolute(nombreArchivo)) {
    const error = new Error('Acceso no permitido: Intento de evasión de directorio detectado');
    error.statusCode = HTTP_STATUS.FORBIDDEN;
    throw error;
  }

  const rutaFinal = path.resolve(BASE_MANUALS_DIR, rutaNormalizada);

  if (!rutaFinal.startsWith(BASE_MANUALS_DIR)) {
    const error = new Error('Ruta fuera del directorio seguro de manuales');
    error.statusCode = HTTP_STATUS.FORBIDDEN;
    throw error;
  }

  return {
    rutaSegura: rutaFinal,
    directorioBase: BASE_MANUALS_DIR,
    archivo: path.basename(rutaFinal)
  };
}

module.exports = {
  obtenerInfoEjercicio,
  listarManuales,
  resolverRutaManualSegura
};
