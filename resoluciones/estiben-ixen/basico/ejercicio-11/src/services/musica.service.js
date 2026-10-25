function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'promesas basicas' };
}
function cargarCanciones() {
  return new Promise((resolve) => resolve([{ id: 1, titulo: 'Bohemian Rhapsody', artista: 'Queen' }]));
}
module.exports = { obtenerInfoEjercicio, cargarCanciones };
