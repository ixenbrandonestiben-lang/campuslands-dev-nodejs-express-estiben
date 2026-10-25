const { HTTP_STATUS } = require('../utils/constants');

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'middleware express.json'
  };
}

function procesarLienzoDigital({ nombreProyecto, anchoPx, altoPx, capas, resolucionDpi }) {
  if (!nombreProyecto || typeof nombreProyecto !== 'string' || !nombreProyecto.trim()) {
    const err = new Error("El 'nombreProyecto' es obligatorio");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const ancho = Number(anchoPx);
  const alto = Number(altoPx);

  if (!ancho || !alto || ancho <= 0 || alto <= 0) {
    const err = new Error("Las dimensiones 'anchoPx' y 'altoPx' deben ser números positivos mayores a 0");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const megapixeles = ((ancho * alto) / 1000000).toFixed(2);

  return {
    id: Date.now(),
    nombreProyecto: nombreProyecto.trim(),
    dimensiones: `${ancho}x${alto} px`,
    megapixeles: Number(megapixeles),
    capasTotales: Number(capas) || 1,
    resolucionDpi: Number(resolucionDpi) || 300,
    creadoEn: new Date().toISOString()
  };
}

module.exports = {
  obtenerInfoEjercicio,
  procesarLienzoDigital
};
