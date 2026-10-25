function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'mini API HTTP nativa' };
}
function listarMenu() { return [{ id: 1, plato: 'Burger Smash' }]; }
module.exports = { obtenerInfoEjercicio, listarMenu };
