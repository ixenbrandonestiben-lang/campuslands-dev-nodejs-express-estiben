// Constantes de códigos de estado HTTP y valores inmutables del dominio MOBA
// Módulos CommonJS
const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
});

const ROLES_VALIDOS = Object.freeze(["Tanque", "Soporte", "Carry", "Mid", "Jungla"]);

module.exports = {
  HTTP_STATUS,
  ROLES_VALIDOS
};
