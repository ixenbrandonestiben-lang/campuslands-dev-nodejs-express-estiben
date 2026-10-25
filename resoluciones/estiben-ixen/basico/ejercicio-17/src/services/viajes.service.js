function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'rutas GET' };
}
function listarDestinos() { return [{ id: 1, ciudad: 'Cartagena', pais: 'Colombia' }]; }
module.exports = { obtenerInfoEjercicio, listarDestinos };
