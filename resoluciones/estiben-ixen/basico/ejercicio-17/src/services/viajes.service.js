const { HTTP_STATUS } = require('../utils/constants');

const DESTINOS = [
  { id: 1, ciudad: 'Cartagena', pais: 'Colombia', dias: 5, precioUsd: 450, categoria: 'Playa' },
  { id: 2, ciudad: 'Kyoto', pais: 'Japon', dias: 8, precioUsd: 1400, categoria: 'Cultural' },
  { id: 3, ciudad: 'San Carlos de Bariloche', pais: 'Argentina', dias: 6, precioUsd: 650, categoria: 'Montana' },
  { id: 4, ciudad: 'Roma', pais: 'Italia', dias: 7, precioUsd: 1100, categoria: 'Historico' }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'rutas GET'
  };
}

function listarDestinos({ pais, maxPrecio }) {
  let resultado = [...DESTINOS];
  if (pais) {
    resultado = resultado.filter(d => d.pais.toLowerCase() === pais.trim().toLowerCase());
  }
  if (maxPrecio) {
    const max = Number(maxPrecio);
    if (!Number.isNaN(max)) {
      resultado = resultado.filter(d => d.precioUsd <= max);
    }
  }
  return resultado;
}

module.exports = {
  obtenerInfoEjercicio,
  listarDestinos
};
