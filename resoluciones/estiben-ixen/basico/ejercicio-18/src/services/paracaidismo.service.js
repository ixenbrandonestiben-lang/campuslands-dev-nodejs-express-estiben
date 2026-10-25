function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'rutas POST' };
}
function crearSalto(body) { return { id: 1, ...body }; }
module.exports = { obtenerInfoEjercicio, crearSalto };
