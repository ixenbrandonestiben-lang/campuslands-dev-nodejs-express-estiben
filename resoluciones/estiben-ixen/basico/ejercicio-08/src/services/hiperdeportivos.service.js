const { HTTP_STATUS } = require('../utils/constants');

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'variables de entorno'
  };
}

function obtenerConfiguracionEntorno() {
  return {
    entorno: process.env.NODE_ENV || 'development',
    puerto: Number(process.env.PORT) || 3000,
    modoTelemetria: process.env.TELEMETRY_ENABLED === 'true' || true,
    limiteVelocidadKmh: Number(process.env.MAX_SPEED_LIMIT) || 450,
    pistaPruebaDefecto: process.env.DEFAULT_TRACK || 'Nurburgring Nordschleife'
  };
}

function listarHiperdeportivos() {
  return [
    { modelo: 'Koenigsegg Jesko Absolut', velocidadMaximaKmh: 531, potenciaCv: 1600 },
    { modelo: 'Bugatti Bolide', velocidadMaximaKmh: 500, potenciaCv: 1850 },
    { modelo: 'Hennessey Venom F5', velocidadMaximaKmh: 500, potenciaCv: 1817 },
    { modelo: 'Pagani Utopia', velocidadMaximaKmh: 380, potenciaCv: 864 }
  ];
}

module.exports = {
  obtenerInfoEjercicio,
  obtenerConfiguracionEntorno,
  listarHiperdeportivos
};
