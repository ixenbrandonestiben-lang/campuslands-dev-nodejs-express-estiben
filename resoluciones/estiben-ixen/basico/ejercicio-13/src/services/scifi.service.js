function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'manejo de errores' };
}
function buscarNave(id) { return { id, nombre: 'Millennium Falcon' }; }
module.exports = { obtenerInfoEjercicio, buscarNave };
