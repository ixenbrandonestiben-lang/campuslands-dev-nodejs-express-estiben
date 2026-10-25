const { HTTP_STATUS } = require('../utils/constants');

const CONFIG_POR_ENTORNO = {
  development: {
    nombreServidor: 'Lobby BR - Servidor Local Dev',
    tickrate: 30,
    maxJugadores: 20,
    debugMode: true,
    lootMultiplier: 2.0
  },
  staging: {
    nombreServidor: 'Lobby BR - Staging Testnet',
    tickrate: 60,
    maxJugadores: 64,
    debugMode: true,
    lootMultiplier: 1.2
  },
  production: {
    nombreServidor: 'Lobby BR - Servidor Principal Competitivo',
    tickrate: 128,
    maxJugadores: 100,
    debugMode: false,
    lootMultiplier: 1.0
  }
};

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'configuracion por entorno'
  };
}

function resolverConfiguracion() {
  const env = (process.env.NODE_ENV || 'development').toLowerCase();
  const config = CONFIG_POR_ENTORNO[env] || CONFIG_POR_ENTORNO.development;
  return {
    entornoActivo: env,
    puerto: Number(process.env.PORT) || 3000,
    parametrosJuego: config
  };
}

module.exports = {
  obtenerInfoEjercicio,
  resolverConfiguracion
};
