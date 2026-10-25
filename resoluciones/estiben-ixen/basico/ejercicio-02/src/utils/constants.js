// Constantes y codigos de estado HTTP
const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
});

const ARMAS_VALIDAS = Object.freeze(["Vandal", "Phantom", "Operator", "Sheriff", "Spectre"]);

module.exports = {
  HTTP_STATUS,
  ARMAS_VALIDAS
};
