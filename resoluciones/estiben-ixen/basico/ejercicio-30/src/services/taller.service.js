function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'proyecto integrador basico' };
}
function listarOrdenes() { return [{ id: 1, moto: 'Yamaha R6' }]; }
module.exports = { obtenerInfoEjercicio, listarOrdenes };
