const { HTTP_STATUS } = require('../utils/constants');

// Base de datos en memoria (Array volátil)
const TRABAJOS_SOLDADURA = [
  { id: 1, pieza: 'Estructura Chasis Tubular', proceso: 'TIG', material: 'Acero Inoxidable 304', horas: 6 },
  { id: 2, pieza: 'Tanque de Presión', proceso: 'MIG/MAG', material: 'Acero al Carbono A36', horas: 12 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'datos en memoria'
  };
}

function listarTrabajosMemoria() {
  return [...TRABAJOS_SOLDADURA];
}

function registrarTrabajoMemoria({ pieza, proceso, material, horas }) {
  if (!pieza || !proceso || !material) {
    const err = new Error("Los campos 'pieza', 'proceso' y 'material' son requeridos");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const nuevo = {
    id: TRABAJOS_SOLDADURA.length > 0 ? Math.max(...TRABAJOS_SOLDADURA.map(t => t.id)) + 1 : 1,
    pieza: pieza.trim(),
    proceso: proceso.trim(),
    material: material.trim(),
    horas: Number(horas) || 1,
    registradoEn: new Date().toISOString()
  };

  TRABAJOS_SOLDADURA.push(nuevo);
  return nuevo;
}

module.exports = {
  obtenerInfoEjercicio,
  listarTrabajosMemoria,
  registrarTrabajoMemoria
};
