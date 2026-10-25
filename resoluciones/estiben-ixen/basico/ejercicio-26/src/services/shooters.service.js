const { HTTP_STATUS } = require('../utils/constants');

const PARTIDAS_RANKED = [
  { id: 1, mapa: 'Ascent', modo: 'Competitivo 5v5', rangoPromedio: 'Diamante', estado: 'En curso' },
  { id: 2, mapa: 'Bind', modo: 'Competitivo 5v5', rangoPromedio: 'Inmortal', estado: 'Finalizada' }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'codigos de estado'
  };
}

function listarPartidas() {
  return [...PARTIDAS_RANKED];
}

function crearLobbyRanked({ mapa, modo, rangoMinimo }) {
  if (!mapa || !modo) {
    const err = new Error("Los campos 'mapa' y 'modo' son obligatorios");
    err.statusCode = HTTP_STATUS.BAD_REQUEST; // 400
    throw err;
  }

  if (modo !== '5v5' && modo !== 'Deathmatch') {
    const err = new Error("El 'modo' no es compatible. Modos permitidos: 5v5, Deathmatch");
    err.statusCode = HTTP_STATUS.UNPROCESSABLE; // 422
    throw err;
  }

  const nueva = {
    id: PARTIDAS_RANKED.length + 1,
    mapa: mapa.trim(),
    modo: modo.trim(),
    rangoMinimo: rangoMinimo || 'Hierro',
    creadaEn: new Date().toISOString()
  };

  PARTIDAS_RANKED.push(nueva);
  return nueva;
}

function cancelarLobby(idParam) {
  const id = parseInt(idParam, 10);
  const index = PARTIDAS_RANKED.findIndex(p => p.id === id);
  if (index === -1) {
    const err = new Error(`Lobby con ID ${id} no encontrado`);
    err.statusCode = HTTP_STATUS.NOT_FOUND; // 404
    throw err;
  }
  PARTIDAS_RANKED.splice(index, 1);
  return true;
}

module.exports = {
  obtenerInfoEjercicio,
  listarPartidas,
  crearLobbyRanked,
  cancelarLobby
};
