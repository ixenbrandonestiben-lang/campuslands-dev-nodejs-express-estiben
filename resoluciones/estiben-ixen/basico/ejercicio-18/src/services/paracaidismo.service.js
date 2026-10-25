const { HTTP_STATUS } = require('../utils/constants');

const RESERVAS_SALTO = [];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'rutas POST'
  };
}

function registrarSalto({ paracaidista, modalidad, alturaPies }) {
  if (!paracaidista || typeof paracaidista !== 'string' || paracaidista.trim().length < 3) {
    const err = new Error("El nombre del 'paracaidista' es obligatorio y debe tener al menos 3 caracteres");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const altura = Number(alturaPies);
  if (Number.isNaN(altura) || altura < 8000 || altura > 18000) {
    const err = new Error("La 'alturaPies' debe ser un número entre 8000 y 18000 pies");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const nuevaReserva = {
    id: RESERVAS_SALTO.length + 1,
    paracaidista: paracaidista.trim(),
    modalidad: modalidad && typeof modalidad === 'string' ? modalidad.trim() : 'Tandem',
    alturaPies: altura,
    caidaLibreSegundos: Math.round((altura - 4000) / 200),
    estado: 'Confirmada',
    fecha: new Date().toISOString()
  };

  RESERVAS_SALTO.push(nuevaReserva);
  return nuevaReserva;
}

module.exports = {
  obtenerInfoEjercicio,
  registrarSalto
};
