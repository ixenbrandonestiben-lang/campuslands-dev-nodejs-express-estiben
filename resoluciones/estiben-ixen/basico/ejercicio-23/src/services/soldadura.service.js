function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'datos en memoria' };
}
function listarTrabajos() { return [{ id: 1, tipo: 'TIG' }]; }
module.exports = { obtenerInfoEjercicio, listarTrabajos };
