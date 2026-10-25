const { HTTP_STATUS } = require('../utils/constants');

const PARTIDAS_MOBA = [
  { id: 101, equipoRadiant: 'OG', equipoDire: 'Team Liquid', estado: 'Finalizada', duracionMin: 42 },
  { id: 102, equipoRadiant: 'PSG.LGD', equipoDire: 'Team Spirit', estado: 'En vivo', duracionMin: 28 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'logs simples'
  };
}

function listarPartidasTorneo() {
  return [...PARTIDAS_MOBA];
}

module.exports = {
  obtenerInfoEjercicio,
  listarPartidasTorneo
};
