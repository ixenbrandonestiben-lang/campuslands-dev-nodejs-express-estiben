const { HTTP_STATUS } = require('../utils/constants');

const PROYECTOS_3D = [
  { id: 1, nombre: 'Aventura Espacial', software: 'Blender 4.2', fps: 24, duracionSeg: 120, rigsActivos: 8 },
  { id: 2, nombre: 'Criatura Mágica', software: 'Maya 2025', fps: 30, duracionSeg: 45, rigsActivos: 3 },
  { id: 3, nombre: 'Persecución Cyberpunk', software: 'Unreal Engine 5', fps: 60, duracionSeg: 180, rigsActivos: 14 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'estructura src routes controllers'
  };
}

function listarProyectos() {
  return [...PROYECTOS_3D];
}

function buscarProyectoPorId(idParam) {
  const id = parseInt(idParam, 10);
  if (Number.isNaN(id) || id <= 0) {
    const err = new Error("El ID del proyecto debe ser un número entero positivo");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }
  const proyecto = PROYECTOS_3D.find(p => p.id === id);
  if (!proyecto) {
    const err = new Error(`Proyecto de animación 3D con ID ${id} no encontrado`);
    err.statusCode = HTTP_STATUS.NOT_FOUND;
    throw err;
  }
  return proyecto;
}

module.exports = {
  obtenerInfoEjercicio,
  listarProyectos,
  buscarProyectoPorId
};
