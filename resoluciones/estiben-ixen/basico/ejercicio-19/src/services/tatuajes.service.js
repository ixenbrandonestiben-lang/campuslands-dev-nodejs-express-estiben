function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'req.params y req.query' };
}
function filtrarTatuajes(estilo) { return [{ estilo, disenio: 'Dragon Oriental' }]; }
module.exports = { obtenerInfoEjercicio, filtrarTatuajes };
