function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'async await' };
}
async function obtenerPeliculas() {
  return [{ id: 1, titulo: 'El Conjuro', calificacionMiedo: 9 }];
}
module.exports = { obtenerInfoEjercicio, obtenerPeliculas };
