const { HTTP_STATUS } = require('../utils/constants');

const PLANOS_ARQUITECTURA = [
  { id: 1, proyecto: 'Torre Residencial Aurora', metrosCuadrados: 12500, niveles: 28, estilo: 'Contemporáneo' },
  { id: 2, proyecto: 'Complejo Cultural Ágora', metrosCuadrados: 8200, niveles: 4, estilo: 'Brutalista' },
  { id: 3, proyecto: 'Centro Empresarial Horizon', metrosCuadrados: 21000, niveles: 35, estilo: 'High-Tech' }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'servicios simples'
  };
}

function listarPlanos() {
  return [...PLANOS_ARQUITECTURA];
}

function calcularPresupuestoEstimado({ proyectoId, precioMetroCuadrado }) {
  const id = parseInt(proyectoId, 10);
  const precioM2 = Number(precioMetroCuadrado);

  if (!id || Number.isNaN(id) || !precioM2 || precioM2 <= 0) {
    const err = new Error("Se requiere 'proyectoId' válido y 'precioMetroCuadrado' positivo");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const plano = PLANOS_ARQUITECTURA.find(p => p.id === id);
  if (!plano) {
    const err = new Error(`Proyecto con ID ${id} no encontrado`);
    err.statusCode = HTTP_STATUS.NOT_FOUND;
    throw err;
  }

  const costoTotalEstimado = plano.metrosCuadrados * precioM2;

  return {
    proyecto: plano.proyecto,
    metrosCuadrados: plano.metrosCuadrados,
    precioMetroCuadrado: precioM2,
    costoTotalEstimadoUsd: costoTotalEstimado,
    calculadoEn: new Date().toISOString()
  };
}

module.exports = {
  obtenerInfoEjercicio,
  listarPlanos,
  calcularPresupuestoEstimado
};
