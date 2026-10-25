const { HTTP_STATUS } = require('../utils/constants');

const TORNEOS_FUTBOL = [
  { id: 1, torneo: 'Copa Nacional de Fútbol Sala', modalidad: 'Futsal FIFA', sede: 'Bogotá', equiposInscritos: 16 },
  { id: 2, torneo: 'Superliga de Fútbol 11', modalidad: 'Césped Natural', sede: 'Medellín', equiposInscritos: 20 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'README tecnico'
  };
}

function listarTorneos() {
  return [...TORNEOS_FUTBOL];
}

module.exports = {
  obtenerInfoEjercicio,
  listarTorneos
};
