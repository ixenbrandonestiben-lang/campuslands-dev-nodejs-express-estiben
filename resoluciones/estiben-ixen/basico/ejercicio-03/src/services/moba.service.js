// Capa de servicios - Lógica de negocio y catálogo MOBA esports
// Módulos CommonJS
const { HTTP_STATUS, ROLES_VALIDOS } = require("../utils/constants");

const HEROES_MOBA = [
  { id: 1, nombre: "Ares", rol: "Tanque", dificultad: "Baja", ataqueBase: 58, vidaBase: 650 },
  { id: 2, nombre: "Seraphina", rol: "Soporte", dificultad: "Media", ataqueBase: 46, vidaBase: 480 },
  { id: 3, nombre: "Shadowblade", rol: "Carry", dificultad: "Alta", ataqueBase: 68, vidaBase: 520 },
  { id: 4, nombre: "Ignis", rol: "Mid", dificultad: "Alta", ataqueBase: 62, vidaBase: 500 },
  { id: 5, nombre: "Fenrir", rol: "Jungla", dificultad: "Media", ataqueBase: 64, vidaBase: 580 }
];

/**
 * Retorna la información y estado general del ejercicio 03
 * @returns {Object} Respuesta requerida por el estándar de Campuslands
 */
function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: "Ejercicio ejecutado correctamente",
    topic: "modulos CommonJS"
  };
}

/**
 * Lista todos los héroes registrados o filtra según el rol indicado
 * @param {string} [filtroRol] - Rol por el cual filtrar (opcional)
 * @returns {Array<Object>} Lista de héroes
 */
function listarHeroes(filtroRol) {
  if (filtroRol) {
    const rolNormalizado = filtroRol.trim();
    const esValido = ROLES_VALIDOS.some(r => r.toLowerCase() === rolNormalizado.toLowerCase());
    if (!esValido) {
      const error = new Error(`El rol de filtro '${filtroRol}' no es válido. Opciones: ${ROLES_VALIDOS.join(", ")}`);
      error.statusCode = HTTP_STATUS.BAD_REQUEST;
      throw error;
    }
    return HEROES_MOBA.filter(h => h.rol.toLowerCase() === rolNormalizado.toLowerCase());
  }
  return [...HEROES_MOBA];
}

/**
 * Busca un héroe específico por su identificador numérico
 * @param {string|number} idParam - Identificador del héroe
 * @returns {Object} Héroe encontrado
 */
function buscarHeroePorId(idParam) {
  const idNumero = parseInt(idParam, 10);
  if (Number.isNaN(idNumero) || idNumero <= 0) {
    const error = new Error("El parámetro 'id' debe ser un número entero positivo");
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  const heroe = HEROES_MOBA.find(h => h.id === idNumero);
  if (!heroe) {
    const error = new Error(`No se encontró ningún héroe con el ID ${idNumero}`);
    error.statusCode = HTTP_STATUS.NOT_FOUND;
    throw error;
  }

  return heroe;
}

/**
 * Registra un pick de héroe para un equipo competitivo
 * @param {Object} datosPick - Datos del pick recibido
 * @param {string} datosPick.equipo - Nombre del equipo
 * @param {string} datosPick.rol - Rol asignado
 * @param {string} [datosPick.nombreHeroe] - Nombre opcional del héroe
 * @returns {Object} Objeto con la información del pick registrado
 */
function registrarPick({ equipo, rol, nombreHeroe }) {
  if (!equipo || typeof equipo !== "string" || !equipo.trim()) {
    const error = new Error("El campo 'equipo' es obligatorio y debe ser un texto válido");
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  if (equipo.trim().length < 2) {
    const error = new Error("El nombre del equipo debe contener al menos 2 caracteres");
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  if (!rol || typeof rol !== "string" || !rol.trim()) {
    const error = new Error("El campo 'rol' es obligatorio");
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  const rolNormalizado = rol.trim();
  const rolExiste = ROLES_VALIDOS.find(r => r.toLowerCase() === rolNormalizado.toLowerCase());
  if (!rolExiste) {
    const error = new Error(`El rol '${rol}' es inválido. Roles permitidos: ${ROLES_VALIDOS.join(", ")}`);
    error.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw error;
  }

  return {
    id: Date.now(),
    equipo: equipo.trim(),
    rol: rolExiste,
    nombreHeroe: nombreHeroe && typeof nombreHeroe === "string" && nombreHeroe.trim()
      ? nombreHeroe.trim()
      : "Héroe Aleatorio",
    oroInicial: 600,
    timestamp: new Date().toISOString()
  };
}

module.exports = {
  ROLES_VALIDOS,
  obtenerInfoEjercicio,
  listarHeroes,
  buscarHeroePorId,
  registrarPick
};
