function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'middleware express.json' };
}
function crearLienzo(body) { return { id: 1, ...body }; }
module.exports = { obtenerInfoEjercicio, crearLienzo };
