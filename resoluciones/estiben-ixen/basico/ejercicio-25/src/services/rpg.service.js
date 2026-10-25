function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'respuestas HTTP correctas' };
}
function listarMisiones() { return [{ id: 1, titulo: 'Cueva del Dragón' }]; }
module.exports = { obtenerInfoEjercicio, listarMisiones };
