function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'logs simples' };
}
function listarPartidasTorneo() { return [{ id: 1, evento: 'The International' }]; }
module.exports = { obtenerInfoEjercicio, listarPartidasTorneo };
