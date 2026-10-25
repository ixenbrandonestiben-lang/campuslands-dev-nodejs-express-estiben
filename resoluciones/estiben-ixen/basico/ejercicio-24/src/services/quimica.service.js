function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'CRUD basico' };
}
function listarCompuestos() { return [{ id: 1, formula: 'H2O' }]; }
module.exports = { obtenerInfoEjercicio, listarCompuestos };
