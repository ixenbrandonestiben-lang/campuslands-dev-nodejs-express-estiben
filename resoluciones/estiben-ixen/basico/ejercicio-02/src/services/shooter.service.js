const { HTTP_STATUS, ARMAS_VALIDAS } = require("../utils/constants");

const LOADOUTS = [
  { id: 1, nombre: "Asalto Tactico", armaPrincipal: "Vandal", armaSecundaria: "Classic", creditos: 3900 },
  { id: 2, nombre: "Control y Humo", armaPrincipal: "Phantom", armaSecundaria: "Ghost", creditos: 3400 },
  { id: 3, nombre: "Francotirador Sniper", armaPrincipal: "Operator", armaSecundaria: "Sheriff", creditos: 5500 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: "Ejercicio ejecutado correctamente",
    topic: "npm scripts y package.json"
  };
}

function listarLoadouts() {
  return [...LOADOUTS];
}

function buscarLoadoutPorId(idParam) {
  const idNum = parseInt(idParam, 10);
  if (Number.isNaN(idNum) || idNum <= 0) {
    const err = new Error("El parametro 'id' debe ser un numero entero positivo");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }
  const item = LOADOUTS.find(l => l.id === idNum);
  if (!item) {
    const err = new Error(`No se encontro loadout con ID ${idNum}`);
    err.statusCode = HTTP_STATUS.NOT_FOUND;
    throw err;
  }
  return item;
}

function registrarLoadout({ nombre, armaPrincipal, armaSecundaria, creditos }) {
  return {
    id: Date.now(),
    nombre: nombre.trim(),
    armaPrincipal: armaPrincipal.trim(),
    armaSecundaria: armaSecundaria || "Classic",
    creditos: Number(creditos) || 2900,
    createdAt: new Date().toISOString()
  };
}

module.exports = {
  obtenerInfoEjercicio,
  listarLoadouts,
  buscarLoadoutPorId,
  registrarLoadout,
  ARMAS_VALIDAS
};
