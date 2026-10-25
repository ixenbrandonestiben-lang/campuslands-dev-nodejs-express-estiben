function obtenerInfoEjercicio() {
  return { ok: true, message: 'Ejercicio ejecutado correctamente', topic: 'funciones asincronas' };
}
async function simularSetPingpong({ jugador1, jugador2 }) {
  return { jugador1, jugador2, marcadorFinal: '11 - 9', ganadorSet: jugador1 };
}
module.exports = { obtenerInfoEjercicio, simularSetPingpong };
