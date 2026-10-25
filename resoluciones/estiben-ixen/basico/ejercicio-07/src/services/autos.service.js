const { HTTP_STATUS } = require('../utils/constants');

const AUTOS_LUJO = [
  { id: 1, marca: 'Ferrari', modelo: 'SF90 Stradale', cv: 1000, precioUsd: 525000 },
  { id: 2, marca: 'Lamborghini', modelo: 'Revuelto', cv: 1015, precioUsd: 608000 },
  { id: 3, marca: 'Porsche', modelo: '911 GT3 RS', cv: 525, precioUsd: 241000 },
  { id: 4, marca: 'Aston Martin', modelo: 'DBS 770 Ultimate', cv: 770, precioUsd: 387000 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'process.argv y CLI'
  };
}

function obtenerInfoCLI() {
  return {
    argumentosCLI: process.argv.slice(2),
    ejecutableNode: process.argv[0],
    scriptEntrada: process.argv[1],
    plataforma: process.platform,
    versionNode: process.version,
    tiempoActivoSegundos: Math.round(process.uptime())
  };
}

function filtrarAutos(marca) {
  if (marca) {
    const normalizado = marca.trim().toLowerCase();
    return AUTOS_LUJO.filter(a => a.marca.toLowerCase() === normalizado);
  }
  return [...AUTOS_LUJO];
}

module.exports = {
  obtenerInfoEjercicio,
  obtenerInfoCLI,
  filtrarAutos
};
