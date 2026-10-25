function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'estructura src routes controllers' };
}
function listarProyectos() { return [{ id: 1, nombre: 'Corto Robot' }]; }
module.exports = { obtenerInfoEjercicio, listarProyectos };
