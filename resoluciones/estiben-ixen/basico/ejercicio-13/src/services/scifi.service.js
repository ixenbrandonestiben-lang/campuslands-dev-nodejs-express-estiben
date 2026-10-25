const { HTTP_STATUS } = require('../utils/constants');

class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const NAVES_ESPACIALES = [
  { id: 1, nombre: 'USS Enterprise NCC-1701', clase: 'Exploración Galáctica', hiperpropulsion: 'Warp 9.6', tripulantes: 430 },
  { id: 2, nombre: 'Millennium Falcon', clase: 'Carguero Ligero Modificado', hiperpropulsion: 'Clase 0.5', tripulantes: 4 },
  { id: 3, nombre: 'Rocinante', clase: 'Corbeta de Ataque Ligero', hiperpropulsion: 'Propulsor Epstein', tripulantes: 8 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'manejo de errores'
  };
}

function listarNaves() {
  return [...NAVES_ESPACIALES];
}

function buscarNavePorId(idParam) {
  const id = parseInt(idParam, 10);
  if (Number.isNaN(id) || id <= 0) {
    throw new AppError("El ID de la nave espacial debe ser un número entero positivo", HTTP_STATUS.BAD_REQUEST);
  }

  const nave = NAVES_ESPACIALES.find(n => n.id === id);
  if (!nave) {
    throw new AppError(`No existe nave espacial registrada con el ID ${id}`, HTTP_STATUS.NOT_FOUND);
  }

  return nave;
}

module.exports = {
  AppError,
  obtenerInfoEjercicio,
  listarNaves,
  buscarNavePorId
};
