function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'README tecnico' };
}
function listarTorneos() { return [{ id: 1, torneo: 'Liga Pro' }]; }
module.exports = { obtenerInfoEjercicio, listarTorneos };
