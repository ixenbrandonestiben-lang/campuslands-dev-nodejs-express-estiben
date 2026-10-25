function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'variables de entorno' };
}
function obtenerConfiguracionEntorno() {
  return { entorno: process.env.NODE_ENV || 'development', puerto: Number(process.env.PORT) || 3000 };
}
function listarHiperdeportivos() { return [{ modelo: 'Bugatti Bolide' }]; }
module.exports = { obtenerInfoEjercicio, obtenerConfiguracionEntorno, listarHiperdeportivos };
