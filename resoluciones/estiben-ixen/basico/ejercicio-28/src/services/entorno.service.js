function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'configuracion por entorno' };
}
function obtenerConfigServidor() { return { entorno: 'development' }; }
module.exports = { obtenerInfoEjercicio, obtenerConfigServidor };
