const HTTP_STATUS = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
});

const ESTADOS_ORDEN = Object.freeze(['Recibida', 'En Reparacion', 'Lista para Entrega', 'Entregada']);

module.exports = { HTTP_STATUS, ESTADOS_ORDEN };
