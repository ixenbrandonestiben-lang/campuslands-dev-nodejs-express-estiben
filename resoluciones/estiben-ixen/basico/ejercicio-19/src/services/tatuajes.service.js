const { HTTP_STATUS } = require('../utils/constants');

const CATALOGO_TATUAJES = [
  { id: 1, estilo: 'blackwork', disenio: 'Geometría Sagrada', artista: 'Kike', precio: 300 },
  { id: 2, estilo: 'blackwork', disenio: 'Mandala Brazo', artista: 'Sofi', precio: 450 },
  { id: 3, estilo: 'realismo', disenio: 'León Sombras', artista: 'Kike', precio: 600 },
  { id: 4, estilo: 'neotradicional', disenio: 'Daga y Serpiente', artista: 'Lucas', precio: 380 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'req.params y req.query'
  };
}

function buscarTatuajesPorEstiloYFiltros(estiloParam, { artista, maxPrecio }) {
  if (!estiloParam || typeof estiloParam !== 'string') {
    const err = new Error("El parámetro de ruta 'estilo' es requerido");
    err.statusCode = HTTP_STATUS.BAD_REQUEST;
    throw err;
  }

  const estiloNormalizado = estiloParam.trim().toLowerCase();
  let items = CATALOGO_TATUAJES.filter(t => t.estilo.toLowerCase() === estiloNormalizado);

  if (artista) {
    items = items.filter(t => t.artista.toLowerCase() === artista.trim().toLowerCase());
  }

  if (maxPrecio) {
    const max = Number(maxPrecio);
    if (!Number.isNaN(max)) {
      items = items.filter(t => t.precio <= max);
    }
  }

  return {
    estiloConsultado: estiloNormalizado,
    totalResultados: items.length,
    tatuajes: items
  };
}

module.exports = {
  obtenerInfoEjercicio,
  buscarTatuajesPorEstiloYFiltros
};
