const { HTTP_STATUS } = require('../utils/constants');

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'funciones asincronas'
  };
}

function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function simularPunto(jugadorA, jugadorB) {
  await esperar(10);
  const ganador = Math.random() > 0.5 ? jugadorA : jugadorB;
  return {
    ganador,
    duracionGolpes: Math.floor(Math.random() * 12) + 3
  };
}

async function simularSetPingpong({ jugador1, jugador2 }) {
  if (!jugador1 || !jugador2 || typeof jugador1 !== 'string' || typeof jugador2 !== 'string') {
    const error = new Error("Los nombres de 'jugador1' y 'jugador2' son obligatorios");
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  let puntos1 = 0;
  let puntos2 = 0;
  const historialPuntos = [];

  while ((puntos1 < 11 && puntos2 < 11) || Math.abs(puntos1 - puntos2) < 2) {
    const punto = await simularPunto(jugador1.trim(), jugador2.trim());
    if (punto.ganador === jugador1.trim()) puntos1++;
    else puntos2++;

    historialPuntos.push({
      puntoNumero: historialPuntos.length + 1,
      anotador: punto.ganador,
      marcador: `${puntos1} - ${puntos2}`
    });

    if (historialPuntos.length >= 30) break;
  }

  return {
    jugador1: jugador1.trim(),
    jugador2: jugador2.trim(),
    marcadorFinal: `${puntos1} - ${puntos2}`,
    ganadorSet: puntos1 > puntos2 ? jugador1.trim() : jugador2.trim(),
    totalPuntosJugados: historialPuntos.length,
    ultimosPuntos: historialPuntos.slice(-5)
  };
}

module.exports = {
  obtenerInfoEjercicio,
  simularSetPingpong
};
