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
  if (!nombre || typeof nombre !== "string" || !nombre.trim()) {
    const err = new Error("El campo 'nombre' es obligatorio y debe ser un texto valido");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }
  if (!armaPrincipal || typeof armaPrincipal !== "string" || !armaPrincipal.trim()) {
    const err = new Error("El campo 'armaPrincipal' es obligatorio");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }
  const armaNormalizada = armaPrincipal.trim();
  const esArmaValida = ARMAS_VALIDAS.some(a => a.toLowerCase() === armaNormalizada.toLowerCase());
  if (!esArmaValida) {
    const err = new Error(`El arma '${armaPrincipal}' no es valida. Permitidas: ${ARMAS_VALIDAS.join(", ")}`);
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const cred = Number(creditos);
  if (creditos !== undefined && (Number.isNaN(cred) || cred < 0 || cred > 9000)) {
    const err = new Error("El valor de 'creditos' debe ser un numero entre 0 y 9000");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  return {
    id: Date.now(),
    nombre: nombre.trim(),
    armaPrincipal: ARMAS_VALIDAS.find(a => a.toLowerCase() === armaNormalizada.toLowerCase()),
    armaSecundaria: armaSecundaria && typeof armaSecundaria === "string" ? armaSecundaria.trim() : "Classic",
    creditos: cred || 2900,
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
