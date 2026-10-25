const { HTTP_STATUS } = require('../utils/constants');

const CANCIONES_CATALOGO = [
  { id: 1, titulo: 'Bohemian Rhapsody', artista: 'Queen', genero: 'Rock', duracionSeg: 354 },
  { id: 2, titulo: 'Billie Jean', artista: 'Michael Jackson', genero: 'Pop', duracionSeg: 294 },
  { id: 3, titulo: 'Hotel California', artista: 'Eagles', genero: 'Rock', duracionSeg: 390 },
  { id: 4, titulo: 'Get Lucky', artista: 'Daft Punk', genero: 'Disco', duracionSeg: 248 }
];

function obtenerInfoEjercicio() {
  return {
    ok: true,
    message: 'Ejercicio ejecutado correctamente',
    topic: 'promesas basicas'
  };
}

/**
 * Retorna una Promesa que resuelve la lista de canciones o rechaza si hay error
 */
function cargarCanciones(generoFiltro) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (generoFiltro) {
        const filtradas = CANCIONES_CATALOGO.filter(c => c.genero.toLowerCase() === generoFiltro.trim().toLowerCase());
        if (filtradas.length === 0) {
          const err = new Error(`No se encontraron canciones para el género '${generoFiltro}'`);
          err.statusCode = HTTP_STATUS.NOT_FOUND;
          return reject(err);
        }
        return resolve(filtradas);
      }
      resolve([...CANCIONES_CATALOGO]);
    }, 15);
  });
}

function buscarCancionPorId(idParam) {
  return new Promise((resolve, reject) => {
    const id = parseInt(idParam, 10);
    if (Number.isNaN(id) || id <= 0) {
      const err = new Error("El ID de la canción debe ser un entero positivo");
      err.statusCode = HTTP_STATUS.BAD_REQUEST;
      return reject(err);
    }
    const cancion = CANCIONES_CATALOGO.find(c => c.id === id);
    if (!cancion) {
      const err = new Error(`Canción con ID ${id} no encontrada`);
      err.statusCode = HTTP_STATUS.NOT_FOUND;
      return reject(err);
    }
    resolve(cancion);
  });
}

module.exports = {
  obtenerInfoEjercicio,
  cargarCanciones,
  buscarCancionPorId
};
