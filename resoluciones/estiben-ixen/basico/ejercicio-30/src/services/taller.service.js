const { HTTP_STATUS, ESTADOS_ORDEN } = require('../utils/constants');

// Base de datos integral en memoria
let ORDENES_REPARACION = [
  { id: 1, cliente: 'Carlos Mendez', moto: 'Yamaha MT-09', problema: 'Cambio de pastillas y aceite', estado: 'En Reparacion', costoEstimado: 350000 },
  { id: 2, cliente: 'Andrea Silva', moto: 'KTM Duke 390', problema: 'Ajuste de kit de arrastre', estado: 'Lista para Entrega', costoEstimado: 280000 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'proyecto integrador basico'
  };
}

function listarOrdenes(filtroEstado) {
  if (filtroEstado) {
    return ORDENES_REPARACION.filter(o => o.estado.toLowerCase() === filtroEstado.trim().toLowerCase());
  }
  return [...ORDENES_REPARACION];
}

function crearOrden({ cliente, moto, problema, costoEstimado }) {
  if (!cliente || !moto || !problema) {
    const err = new Error("Los campos 'cliente', 'moto' y 'problema' son obligatorios");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const nueva = {
    id: ORDENES_REPARACION.length > 0 ? Math.max(...ORDENES_REPARACION.map(o => o.id)) + 1 : 1,
    cliente: cliente.trim(),
    moto: moto.trim(),
    problema: problema.trim(),
    estado: 'Recibida',
    costoEstimado: Number(costoEstimado) || 100000,
    creadoEn: new Date().toISOString()
  };

  ORDENES_REPARACION.push(nueva);
  return nueva;
}

function actualizarEstadoOrden(idParam, nuevoEstado) {
  const id = parseInt(idParam, 10);
  const orden = ORDENES_REPARACION.find(o => o.id === id);
  if (!orden) {
    const err = new Error(`Orden ${id} no encontrada`);
    err.statusCode = HTTP_STATUS.NOT_FOUND;
    throw err;
  }

  const estadoValido = ESTADOS_ORDEN.find(e => e.toLowerCase() === (nuevoEstado || '').trim().toLowerCase());
  if (!estadoValido) {
    const err = new Error(`Estado inválido. Opciones permitidas: ${ESTADOS_ORDEN.join(', ')}`);
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  orden.estado = estadoValido;
  return orden;
}

module.exports = {
  obtenerInfoEjercicio,
  listarOrdenes,
  crearOrden,
  actualizarEstadoOrden
};
