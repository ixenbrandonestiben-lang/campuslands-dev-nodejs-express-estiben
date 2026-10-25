function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'codigos de estado' };
}
function crearLobby(body) { return { id: 1, ...body }; }
module.exports = { obtenerInfoEjercicio, crearLobby };
