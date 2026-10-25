function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'process.argv y CLI' };
}
function obtenerInfoCLI() { return { argv: process.argv.slice(2) }; }
function filtrarAutos() { return [{ id: 1, marca: 'Ferrari', modelo: 'SF90' }]; }
module.exports = { obtenerInfoEjercicio, obtenerInfoCLI, filtrarAutos };
