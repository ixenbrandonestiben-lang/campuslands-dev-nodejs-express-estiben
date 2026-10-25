function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'validacion de entrada' };
}
function registrarLibro(body) { return { id: 1, ...body }; }
module.exports = { obtenerInfoEjercicio, registrarLibro, listarLibros: () => [] };
