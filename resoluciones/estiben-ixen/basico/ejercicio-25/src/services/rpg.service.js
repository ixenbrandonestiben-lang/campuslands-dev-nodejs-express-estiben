const { HTTP_STATUS } = require('../utils/constants');

const MISIONES_RPG = [
  { id: 1, titulo: 'La Guarida del Dragón Rojo', rango: 'S', recompensaOro: 5000, xp: 12000, estado: 'Disponible' },
  { id: 2, titulo: 'Rescate en el Bosque Sombrío', rango: 'B', recompensaOro: 800, xp: 2500, estado: 'En progreso' },
  { id: 3, titulo: 'Defensa de la Fortaleza Solar', rango: 'A', recompensaOro: 2200, xp: 6000, estado: 'Disponible' }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'respuestas HTTP correctas'
  };
}

function listarMisiones(rango) {
  if (rango) {
    return MISIONES_RPG.filter(m => m.rango.toUpperCase() === rango.trim().toUpperCase());
  }
  return [...MISIONES_RPG];
}

module.exports = {
  obtenerInfoEjercicio,
  listarMisiones
};
