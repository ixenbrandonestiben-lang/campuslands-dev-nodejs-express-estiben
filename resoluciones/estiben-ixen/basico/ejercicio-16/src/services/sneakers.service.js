function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'primer servidor Express' };
}
function listarDrops() { return [{ id: 1, modelo: 'Air Jordan 1 Chicago' }]; }
module.exports = { obtenerInfoEjercicio, listarDrops };
