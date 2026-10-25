const { HTTP_STATUS } = require('../utils/constants');

let COMPUESTOS = [
  { id: 1, nombreComun: 'Agua', formula: 'H2O', pesoMolecular: 18.015, estado: 'Líquido' },
  { id: 2, nombreComun: 'Dióxido de Carbono', formula: 'CO2', pesoMolecular: 44.01, estado: 'Gas' },
  { id: 3, nombreComun: 'Cloruro de Sodio', formula: 'NaCl', pesoMolecular: 58.44, estado: 'Sólido' }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'CRUD basico'
  };
}

// C - Create
function crearCompuesto({ nombreComun, formula, pesoMolecular, estado }) {
  if (!nombreComun || !formula) {
    const err = new Error("Los campos 'nombreComun' y 'formula' son obligatorios");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }
  const nuevo = {
    id: COMPUESTOS.length > 0 ? Math.max(...COMPUESTOS.map(c => c.id)) + 1 : 1,
    nombreComun: nombreComun.trim(),
    formula: formula.trim(),
    pesoMolecular: Number(pesoMolecular) || 0,
    estado: estado || 'Sólido'
  };
  COMPUESTOS.push(nuevo);
  return nuevo;
}

// R - Read All & Read One
function listarCompuestos() {
  return [...COMPUESTOS];
}

function obtenerCompuestoPorId(idParam) {
  const id = parseInt(idParam, 10);
  const compuesto = COMPUESTOS.find(c => c.id === id);
  if (!compuesto) {
    const err = new Error(`Compuesto con ID ${id} no encontrado`);
    err.statusCode = HTTP_STATUS.NOT_FOUND;
    throw err;
  }
  return compuesto;
}

// U - Update
function actualizarCompuesto(idParam, datos) {
  const compuesto = obtenerCompuestoPorId(idParam);
  if (datos.nombreComun) compuesto.nombreComun = datos.nombreComun.trim();
  if (datos.formula) compuesto.formula = datos.formula.trim();
  if (datos.pesoMolecular) compuesto.pesoMolecular = Number(datos.pesoMolecular);
  if (datos.estado) compuesto.estado = datos.estado.trim();
  return compuesto;
}

// D - Delete
function eliminarCompuesto(idParam) {
  const id = parseInt(idParam, 10);
  const index = COMPUESTOS.findIndex(c => c.id === id);
  if (index === -1) {
    const err = new Error(`Compuesto con ID ${id} no encontrado`);
    err.statusCode = HTTP_STATUS.NOT_FOUND;
    throw err;
  }
  const eliminado = COMPUESTOS.splice(index, 1)[0];
  return eliminado;
}

module.exports = {
  obtenerInfoEjercicio,
  crearCompuesto,
  listarCompuestos,
  obtenerCompuestoPorId,
  actualizarCompuesto,
  eliminarCompuesto
};
