function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'servicios simples' };
}
function listarPlanos() { return [{ id: 1, edificio: 'Torre Central' }]; }
module.exports = { obtenerInfoEjercicio, listarPlanos };
